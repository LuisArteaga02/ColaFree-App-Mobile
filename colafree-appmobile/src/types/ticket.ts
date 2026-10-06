export type TicketStatus =
  | 'WAITING'
  | 'CALLED'
  | 'RECALL'
  | 'IN_SERVICE'
  | 'COMPLETED'
  | 'CANCELED'
  | 'NO_SHOW'
  | 'ON_HOLD'
  | 'TRANSFERRED';

export type PublicTicket = {
  ticketToken: string;
  ticketNumber: string;
  status: TicketStatus;
  serviceName: string;
  businessName?: string;
  branchName?: string;
  position?: number;
  estimatedWaitMinutes?: number;
  createdAt?: string;
  canCancel?: boolean;
};

export type CreateTicketRequest = {
  deviceSessionId: string;
  deviceSessionToken: string;
  channel: 'QR';
};

export type CreateTicketResponse = {
  ticketToken: string;
  ticketNumber: string;
  status: TicketStatus;
  serviceName: string;
  position: number;
  estimatedWaitMinutes: number;
  message?: string;
};

export type CancelTicketRequest = {
  reason: 'USER_LEFT';
};