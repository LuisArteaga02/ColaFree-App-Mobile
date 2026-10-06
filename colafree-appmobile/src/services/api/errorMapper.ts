import axios from 'axios';
import type { ApiErrorCode } from '../../types/api';

export type MappedApiError = {
  code: ApiErrorCode | 'NETWORK_ERROR' | 'TIMEOUT' | 'UNKNOWN_ERROR';
  message: string;
  retryable: boolean;
};

const errorMessages: Record<ApiErrorCode, string> = {
  VALIDATION_ERROR:
    'No pudimos procesar la información.',

  INVALID_QR_TOKEN:
    'Este QR no es válido o ya no está disponible.',

  INVALID_TICKET_TOKEN:
    'No encontramos este turno.',

  QUEUE_CLOSED:
    'La cola está cerrada en este momento.',

  QUEUE_PAUSED:
    'La cola está pausada temporalmente.',

  TICKET_NOT_CANCELABLE:
    'Este turno ya no se puede cancelar.',

  TICKET_ALREADY_ACTIVE:
    'Ya tienes un turno activo en esta cola.',

  RATE_LIMITED:
    'Has realizado muchas acciones. Intenta nuevamente en un momento.',

  INTERNAL_ERROR:
    'Algo salió mal. Intenta nuevamente.',
};

export function mapApiError(error: unknown): MappedApiError {
  if (axios.isAxiosError(error)) {
    if (error.code === 'ECONNABORTED') {
      return {
        code: 'TIMEOUT',
        message: 'La solicitud tardó demasiado. Intenta nuevamente.',
        retryable: true,
      };
    }

    if (!error.response) {
      return {
        code: 'NETWORK_ERROR',
        message: 'No pudimos conectarnos. Revisa tu conexión.',
        retryable: true,
      };
    }

    const apiError = error.response.data?.error;

    if (apiError?.code && apiError.code in errorMessages) {
      const code = apiError.code as ApiErrorCode;

      return {
        code,
        message: errorMessages[code],
        retryable: code === 'INTERNAL_ERROR',
      };
    }

    if (error.response.status >= 500) {
      return {
        code: 'INTERNAL_ERROR',
        message: errorMessages.INTERNAL_ERROR,
        retryable: true,
      };
    }
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: 'Ocurrió un error inesperado.',
    retryable: false,
  };
}