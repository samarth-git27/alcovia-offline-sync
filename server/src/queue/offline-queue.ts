import { EventModel } from "../models/event.model";

export class OfflineQueue {

  private static queue:
    EventModel[] = [];

  static enqueue(
    event: EventModel
  ) {
    this.queue.push(event);
  }

  static dequeue() {
    return this.queue.shift();
  }

  static getAll() {
    return this.queue;
  }

  static clear() {
    this.queue = [];
  }

  static size() {
    return this.queue.length;
  }
}