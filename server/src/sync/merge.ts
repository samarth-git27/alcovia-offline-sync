import { TaskModel } from "../models/task.model";
import { ConflictResolver } from "./conflict-resolver";

export class MergeEngine {

  static mergeTasks(
    localTasks: TaskModel[],
    incomingTasks: TaskModel[]
  ): TaskModel[] {

    const map = new Map<
      string,
      TaskModel
    >();

    localTasks.forEach(task => {
      map.set(task.id, task);
    });

    incomingTasks.forEach(task => {

      const existing =
        map.get(task.id);

      if (!existing) {
        map.set(task.id, task);
        return;
      }

      const resolved =
        ConflictResolver.resolveTask(
          existing,
          task
        );

      map.set(
        task.id,
        resolved
      );
    });

    return Array.from(
      map.values()
    );
  }
}