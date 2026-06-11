export type FocusSessionStatus =
  | "RUNNING"
  | "COMPLETED"
  | "FAILED";

export interface FocusSession {
  id: string;
  studentId: string;
  deviceId: string;

  targetMinutes: number;

  status: FocusSessionStatus;

  failureReason?:
    | "give_up"
    | "app_switch";

  startedAt: string;

  completedAt?: string;

  rewardApplied: boolean;
}