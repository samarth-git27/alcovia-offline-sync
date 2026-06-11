import { v4 as uuid } from "uuid";

import { db } from "../storage/database";

import { RewardService } from "./reward.service";

import { EventStore } from "../events/event-store";

import { EventFactory } from "../events/event-factory";

import { OfflineQueue } from "../queue/offline-queue";

export class FocusService {

  static completeSession(
    durationMinutes: number,
    deviceId: string
  ) {

    const sessionId = uuid();

    const session = {

      id: sessionId,

      studentId: "student-1",

      deviceId,

      targetMinutes: durationMinutes,

      status: "COMPLETED" as const,

      rewardApplied: true
    };

    db.focusSessions.push(
      session
    );

    RewardService.applyReward(
      durationMinutes
    );

    const event =
      EventFactory.create(
        "SESSION_COMPLETED",
        session,
        deviceId
      );

    EventStore.append(
      event
    );

    OfflineQueue.enqueue(
      event
    );

    EventStore.markProcessed(
      event.id
    );

    return {
      session,
      event
    };
  }

  static failSession(
    reason:
      | "give_up"
      | "app_switch",
    deviceId: string
  ) {

    const session = {

      id: uuid(),

      studentId: "student-1",

      deviceId,

      targetMinutes: 0,

      status: "FAILED" as const,

      failureReason: reason,

      rewardApplied: false
    };

    db.focusSessions.push(
      session
    );

    const event =
      EventFactory.create(
        "SESSION_FAILED",
        session,
        deviceId
      );

    EventStore.append(
      event
    );

    OfflineQueue.enqueue(
      event
    );

    EventStore.markProcessed(
      event.id
    );

    return {
      session,
      event
    };
  }
}