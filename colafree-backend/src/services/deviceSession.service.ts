import { randomUUID } from 'crypto';
import type { DeviceSession } from '../types/deviceSession.js';

const deviceSessions: DeviceSession[] = [];

export const createDeviceSession = (
    clientType: string,
    locale: string,
): DeviceSession => {
    const session: DeviceSession = {
        deviceSessionId: randomUUID(),
        deviceSessionToken: randomUUID(),
        clientType,
        locale,
    };

    deviceSessions.push(session);

    return session;
};