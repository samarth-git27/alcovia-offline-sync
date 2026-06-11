export interface TaskModel {
  id: string;

  title: string;

  status:
    | "NOT_STARTED"
    | "IN_PROGRESS"
    | "DONE";

  deleted: boolean;

  lamportClock: number;

  deviceId: string;

  updatedAt: string;
}