export type QueueStatus = 'ACTIVE' | 'PAUSED' | 'CLOSED';

export type PublicQueue = {
  queueToken: string;
  businessName: string;
  branchName: string;
  serviceName: string;
  queueStatus: QueueStatus;
  waitingCount: number;
  estimatedWaitMinutes: number;
  allowsTickets: boolean;
  message?: string;
};

export type QRType = 'BRANCH' | 'QUEUE';

export type QueueService = {
  queueToken: string;
  serviceName: string;
  queueStatus: QueueStatus;
  waitingCount: number;
  estimatedWaitMinutes: number;
  allowsTickets: boolean;
};

export type QRResolveResponse = {
  qrType: QRType;
  businessName: string;
  branchName: string;
  services?: QueueService[];
  queue?: PublicQueue;
};