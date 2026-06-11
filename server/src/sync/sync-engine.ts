import { EventStore } from "../events/event-store";
import { EventModel } from "../models/event.model";
import { db } from "../storage/database";
import { devices } from "../storage/devices";

export class SyncEngine {

  static processEvents(
    deviceId: string,
    incomingEvents: EventModel[]
  ) {

    const acceptedEvents: EventModel[] = [];

    for (const event of incomingEvents) {

      if (
        EventStore.hasProcessed(
          event.id
        )
      ) {
        continue;
      }

      EventStore.append(event);

      EventStore.markProcessed(
        event.id
      );

      acceptedEvents.push(event);
    }

    const device =
      devices[
        deviceId as keyof typeof devices
      ];

    const missingEvents =
      db.events.slice(
        device.lastSyncEventIndex
      );

    device.lastSyncEventIndex =
      db.events.length;

    return {

      success: true,

      acceptedEvents,

      missingEvents,

      totalEvents:
        db.events.length
    };
  }
}