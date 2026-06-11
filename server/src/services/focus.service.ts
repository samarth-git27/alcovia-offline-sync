import { v4 as uuid } from "uuid";
import { db } from "../storage/database";
import { RewardService } from "./reward.service";

export class FocusService {

  static completeSession(
    durationMinutes: number,
    deviceId: string
  ) {

    const sessionId = uuid();

    const existing =
      db.focusSessions.find(
        s => s.id === sessionId
      );

    if (existing) {
      return existing;
    }

    const session = {
      id: sessionId,
      studentId: "student-1",
      deviceId,
      targetMinutes:
        durationMinutes,
      status: "COMPLETED" as const,
      rewardApplied: true
    };

    db.focusSessions.push(
      session
    );

    RewardService.applyReward(
      durationMinutes
    );

    return session;
  }
}