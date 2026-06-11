import { api }
from "./api";

export async function sendNotification() {

  const response =
    await api.post(
      "/notify",
      {
        eventId:
          Date.now()
            .toString(),

        message:
          "Focus Reward Granted"
      }
    );

  return response.data;
}