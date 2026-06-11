import { api } from "./api";

export async function syncDevice(
  deviceId: string
) {

  const response =
    await api.post(
      "/sync",
      {
        deviceId,
        events: []
      }
    );

  return response.data;
}