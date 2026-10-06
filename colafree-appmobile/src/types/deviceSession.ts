export type DeviceSessionRequest = {
  clientType: 'MOBILE';
  metadata: {
    locale: string;
  };
};

export type DeviceSession = {
  deviceSessionId: string;
  deviceSessionToken: string;
};

export type ActiveTicket = {
  ticketToken: string;
  ticketNumber: string;
  status: string;
  serviceName?: string;
  businessName?: string;
  branchName?: string;
};

export type ActiveTicketsResponse = {
  tickets: ActiveTicket[];
};