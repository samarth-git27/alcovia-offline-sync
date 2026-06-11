import { TaskModel } from "../models/task.model";

export class ConflictResolver {

  static resolveTask(
    localTask: TaskModel,
    incomingTask: TaskModel
  ): TaskModel {

    if (
      incomingTask.deleted &&
      !localTask.deleted
    ) {

      if (
        incomingTask.lamportClock >=
        localTask.lamportClock
      ) {
        return incomingTask;
      }
    }

    if (
      incomingTask.lamportClock >
      localTask.lamportClock
    ) {
      return incomingTask;
    }

    if (
      incomingTask.lamportClock <
      localTask.lamportClock
    ) {
      return localTask;
    }

    if (
      incomingTask.updatedAt >
      localTask.updatedAt
    ) {
      return incomingTask;
    }

    return incomingTask.deviceId >
      localTask.deviceId
      ? incomingTask
      : localTask;
  }
}