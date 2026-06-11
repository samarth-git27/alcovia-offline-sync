export interface BaseEvent {
  eventId: string;

  deviceId: string;

  userId: string;

  lamportClock: number;

  createdAt: string;

  type: string;

  payload: any;
}