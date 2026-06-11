import { v4 as uuid } from "uuid";

export class EventFactory {

  static create(
    type: string,
    payload: unknown,
    deviceId: string
  ) {

    return {
      id: uuid(),

      type,

      studentId: "student-1",

      deviceId,

      lamportClock: 0,

      createdAt:
        new Date().toISOString(),

      payload
    };
  }
}