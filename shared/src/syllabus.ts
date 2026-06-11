export interface Task {
  id: string;

  title: string;

  status:
    | "NOT_STARTED"
    | "IN_PROGRESS"
    | "DONE";

  deleted: boolean;

  version: number;
}