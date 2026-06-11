import { db } from "./database";

db.subjects.push({
  id: "subject-1",
  title: "Mathematics",
  chapterIds: [
    "chapter-1"
  ]
});

db.chapters.push({
  id: "chapter-1",
  subjectId: "subject-1",
  title: "Algebra",
  taskIds: [
    "task-1",
    "task-2"
  ]
});

db.tasks.push(
  {
    id: "task-1",
    title: "Algebra Revision",
    status: "NOT_STARTED",
    deleted: false,
    lamportClock: 0,
    deviceId: "seed"
  },
  {
    id: "task-2",
    title: "Quadratic Equations",
    status: "NOT_STARTED",
    deleted: false,
    lamportClock: 0,
    deviceId: "seed"
  }
);

console.log(
  "Seed data loaded"
);