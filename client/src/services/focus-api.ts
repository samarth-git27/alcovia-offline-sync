import { api } from "./api";

export async function completeFocusSession(
  durationMinutes: number,
  deviceId: string
) {
  const response = await api.post(
    "/focus/complete",
    {
      durationMinutes,
      deviceId
    }
  );

  return response.data;
}

export async function failFocusSession(
  reason: string,
  deviceId: string
) {
  const response = await api.post(
    "/focus/fail",
    {
      reason,
      deviceId
    }
  );

  return response.data;
}