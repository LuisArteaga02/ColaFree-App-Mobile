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