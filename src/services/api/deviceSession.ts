import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import type { ApiSuccessResponse } from '../../types/api';
import type { DeviceSession, DeviceSessionRequest } from '../../types/deviceSession';
import { apiClient } from './apiClient';

const SESSION_STORAGE_KEY = 'colafree.deviceSession';
let sessionPromise: Promise<DeviceSession> | undefined;

function isDeviceSession(value: unknown): value is DeviceSession {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return (
    'deviceSessionId' in value &&
    typeof value.deviceSessionId === 'string' &&
    'deviceSessionToken' in value &&
    typeof value.deviceSessionToken === 'string'
  );
}

async function readStoredSession(): Promise<DeviceSession | null> {
  const storedSession = Platform.OS === 'web'
    ? globalThis.localStorage.getItem(SESSION_STORAGE_KEY)
    : await SecureStore.getItemAsync(SESSION_STORAGE_KEY);

  if (!storedSession) {
    return null;
  }

  let parsedSession: unknown;
  try {
    parsedSession = JSON.parse(storedSession);
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }

    await deleteStoredSession();
    return null;
  }

  if (!isDeviceSession(parsedSession)) {
    await deleteStoredSession();
    return null;
  }

  return parsedSession;
}

async function deleteStoredSession(): Promise<void> {
  if (Platform.OS === 'web') {
    globalThis.localStorage.removeItem(SESSION_STORAGE_KEY);
    return;
  }

  await SecureStore.deleteItemAsync(SESSION_STORAGE_KEY);
}

async function createOrReadSession(): Promise<DeviceSession> {
  const storedSession = await readStoredSession();
  if (storedSession) {
    return storedSession;
  }

  const request: DeviceSessionRequest = {
    clientType: 'MOBILE',
    metadata: { locale: 'es-SV' },
  };
  const response = await apiClient.post<ApiSuccessResponse<DeviceSession>>(
    '/device-sessions',
    request,
  );

  const serializedSession = JSON.stringify(response.data.data);
  if (Platform.OS === 'web') {
    globalThis.localStorage.setItem(SESSION_STORAGE_KEY, serializedSession);
  } else {
    await SecureStore.setItemAsync(SESSION_STORAGE_KEY, serializedSession);
  }

  return response.data.data;
}

export function getOrCreateDeviceSession(): Promise<DeviceSession> {
  if (!sessionPromise) {
    sessionPromise = createOrReadSession().catch(error => {
      sessionPromise = undefined;
      throw error;
    });
  }

  return sessionPromise;
}
