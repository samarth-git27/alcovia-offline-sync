import { EventStore } from "../events/event-store";
import { EventModel } from "../models/event.model";
import { db } from "../storage/database";

export class SyncEngine {

  static processEvents(
    events: EventModel[]
  ) {

    for (const event of events) {

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
    }

    return {
      success: true,
      processedEvents:
        db.events.length
    };
  }
}