export interface EventModel {
  id: string;

  type: string;

  studentId: string;

  deviceId: string;

  lamportClock: number;

  createdAt: string;

  payload: unknown;
}