import { api } from "./api";

export async function getProgress() {

  const response =
    await api.get(
      "/subjects/subject-1/progress"
    );

  return response.data;
}

export async function completeTask() {

  const response =
    await api.post(
      "/tasks/update",
      {
        taskId: "task-1",
        status: "DONE",
        deviceId: "device-a",
        lamportClock: 1
      }
    );

  return response.data;
}