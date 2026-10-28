export type QueueTicket = {
  id: string;
  number: number;
  createdAt: string;
  queue: {
    id: string;
    name: string;
    averageServiceTimeMin: number;
    currentServingNumber: number;
  };
};

export type JoinQueueResponse = {
  ticketId: string;
  queueName: string;
  number: number;
  status: {
    peopleAhead: number;
    estimatedWaitTimeMinutes: number;
    distanceKm: number | null;
  };
  createdAt: string;
};