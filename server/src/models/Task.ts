export type TaskStatus =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "DONE";

export interface Task {
  id: string;

  chapterId: string;

  title: string;

  status: TaskStatus;

  deleted: boolean;

  lamportClock: number;

  deviceId: string;
}