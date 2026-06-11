export interface FocusSessionModel {
  id: string;

  studentId: string;

  deviceId: string;

  targetMinutes: number;

  status:
    | "RUNNING"
    | "COMPLETED"
    | "FAILED";

  rewardApplied: boolean;
}