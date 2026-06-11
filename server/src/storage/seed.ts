import { db } from "./database";

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
    title: "Physics Numericals",
    status: "NOT_STARTED",
    deleted: false,
    lamportClock: 0,
    deviceId: "seed"
  }
);

console.log("Seed data loaded");