import { create } from "zustand";

interface DeviceState {

  deviceAOnline: boolean;

  deviceBOnline: boolean;

  queueSize: number;

  setDeviceAOnline:
    (value: boolean) => void;

  setDeviceBOnline:
    (value: boolean) => void;

  setQueueSize:
    (size: number) => void;
}

export const useDeviceStore =
  create<DeviceState>(
    set => ({

      deviceAOnline: true,

      deviceBOnline: true,

      queueSize: 0,

      setDeviceAOnline:
        value =>
          set({
            deviceAOnline:
              value
          }),

      setDeviceBOnline:
        value =>
          set({
            deviceBOnline:
              value
          }),

      setQueueSize:
        size =>
          set({
            queueSize:
              size
          })
    })
  );