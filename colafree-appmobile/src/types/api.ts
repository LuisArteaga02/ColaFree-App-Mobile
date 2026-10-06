export type ApiSuccessResponse<T> = {
  ok: true;
  data: T;
  requestId?: string;
};

export type ApiErrorResponse = {
  ok: false;
  error: {
    code: string;
    message?: string;
    details?: unknown;
  };
  requestId?: string;
};

export type ApiResponse<T> =
  | ApiSuccessResponse<T>
  | ApiErrorResponse;

export type ApiErrorCode =
  | 'VALIDATION_ERROR'
  | 'INVALID_QR_TOKEN'
  | 'INVALID_TICKET_TOKEN'
  | 'QUEUE_CLOSED'
  | 'QUEUE_PAUSED'
  | 'TICKET_NOT_CANCELABLE'
  | 'TICKET_ALREADY_ACTIVE'
  | 'RATE_LIMITED'
  | 'INTERNAL_ERROR';