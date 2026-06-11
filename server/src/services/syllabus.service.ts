import { db } from "../storage/database";

export class SyllabusService {

  static updateTaskStatus(
    taskId: string,
    status:
      | "NOT_STARTED"
      | "IN_PROGRESS"
      | "DONE",
    deviceId: string,
    lamportClock: number
  ) {

    const task =
      db.tasks.find(
        t => t.id === taskId
      );

    if (!task) {
      throw new Error(
        "Task not found"
      );
    }

    task.status = status;

    task.deviceId =
      deviceId;

    task.lamportClock =
      lamportClock;

    return task;
  }

  static getSubjectProgress(
    subjectId: string
  ) {

    const subject =
      db.subjects.find(
        s => s.id === subjectId
      );

    if (!subject) {
      return 0;
    }

    const chapters =
      db.chapters.filter(
        c =>
          c.subjectId ===
          subject.id
      );

    let totalTasks = 0;

    let completedTasks = 0;

    chapters.forEach(
      chapter => {

        chapter.taskIds.forEach(
          taskId => {

            const task =
              db.tasks.find(
                t =>
                  t.id === taskId
              );

            if (!task) {
              return;
            }

            totalTasks++;

            if (
              task.status ===
              "DONE"
            ) {
              completedTasks++;
            }
          }
        );
      }
    );

    if (
      totalTasks === 0
    ) {
      return 0;
    }

    return Math.round(
      (completedTasks /
        totalTasks) *
      100
    );
  }
}