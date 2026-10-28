import type { ApiSuccessResponse } from '../../types/api';
import type { QueueTicket, JoinQueueResponse } from '../../types/ticket';
import { apiClient } from './apiClient';

export async function joinQueue(
  queueId: string,
  deviceSessionToken: string,
): Promise<JoinQueueResponse> {
  const response = await apiClient.post<ApiSuccessResponse<JoinQueueResponse>>(
    `/queues/${encodeURIComponent(queueId)}/join`,
    { deviceSessionToken },
  );

  return response.data.data;
}

export async function getMyTickets(
  deviceSessionToken: string,
): Promise<QueueTicket[]> {
  const response = await apiClient.get<ApiSuccessResponse<QueueTicket[]>>(
    '/queues/my-tickets',
    { headers: { 'x-device-session': deviceSessionToken } },
  );

  return response.data.data;
}

export function parseQueueIdFromQr(value: string): string | null {
  const content = value.trim();
  if (!content) {
    return null;
  }

  if (!content.includes('://')) {
    return content.includes('/') ? null : content;
  }

  try {
    const url = new URL(content);
    const queryId =
      url.searchParams.get('queueId') ??
      url.searchParams.get('queue') ??
      url.searchParams.get('id');

    if (queryId) {
      return queryId;
    }

    const segments = url.pathname.split('/').filter(Boolean);
    const queueIndex = segments.findIndex(segment => segment === 'queues' || segment === 'queue');

    if (queueIndex >= 0 && segments[queueIndex + 1]) {
      return segments[queueIndex + 1];
    }

    if (url.hostname === 'queue' || url.hostname === 'queues') {
      return segments[0] ?? null;
    }
  } catch (error) {
    if (error instanceof TypeError) {
      return null;
    }

    throw error;
  }

  return null;
}
