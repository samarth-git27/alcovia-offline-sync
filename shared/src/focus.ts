export interface FocusSession {
  sessionId: string;

  targetMinutes: number;

  status:
    | "RUNNING"
    | "COMPLETED"
    | "FAILED";

  failureReason?:
    | "give_up"
    | "app_switch";

  startedAt: string;

  completedAt?: string;
}