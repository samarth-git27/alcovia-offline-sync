import { EventModel } from "../models/event.model";
import { db } from "../storage/database";

export class EventStore {
  static hasProcessed(
    eventId: string
  ): boolean {
    return db.processedEventIds.has(
      eventId
    );
  }

  static markProcessed(
    eventId: string
  ) {
    db.processedEventIds.add(
      eventId
    );
  }

  static append(
    event: EventModel
  ) {
    db.events.push(event);
  }
}