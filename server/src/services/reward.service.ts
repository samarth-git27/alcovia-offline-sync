import { db } from "../storage/database";

export class RewardService {

  static applyReward(
    durationMinutes: number
  ) {

    db.student.coins += 50;

    db.student.streak += 1;

    db.student.todayFocusMinutes +=
      durationMinutes;
  }
}