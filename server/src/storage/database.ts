import { EventModel } from "../models/event.model";
import { FocusSessionModel } from "../models/focus-session.model";
import { StudentModel } from "../models/student.model";
import { TaskModel } from "../models/task.model";
import { SubjectModel } from "../models/subject.model";
import { ChapterModel } from "../models/chapter.model";

export const db = {
  student: {
    id: "student-1",
    streak: 0,
    coins: 0,
    todayFocusMinutes: 0
  } as StudentModel,

  tasks: [] as TaskModel[],

  subjects: [] as SubjectModel[],

  chapters: [] as ChapterModel[],

  focusSessions: [] as FocusSessionModel[],

  events: [] as EventModel[],

  processedEventIds:
    new Set<string>()
};