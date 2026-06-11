import { TaskModel } from "../models/task.model";

export class ConflictResolver {
  static resolveTask(
    localTask: TaskModel,
    incomingTask: TaskModel
  ): TaskModel {

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

    return incomingTask.deviceId >
      localTask.deviceId
      ? incomingTask
      : localTask;
  }
}