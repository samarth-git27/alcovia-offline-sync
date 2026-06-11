import { api } from "./api";

export async function getDevices() {

  const response =
    await api.get(
      "/devices"
    );

  return response.data;
}

export async function toggleDevice(
  id: string
) {

  const response =
    await api.post(
      `/devices/${id}/toggle`
    );

  return response.data;
}

export async function getQueue() {

  const response =
    await api.get(
      "/queue"
    );

  return response.data;
}