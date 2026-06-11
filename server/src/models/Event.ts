export type EventType =
  | "SESSION_COMPLETED"
  | "SESSION_FAILED"
  | "TASK_UPDATED"
  | "TASK_DELETED";

export interface Event {
  id: string;

  type: EventType;

  studentId: string;

  deviceId: string;

  lamportClock: number;

  createdAt: string;

  payload: unknown;
}