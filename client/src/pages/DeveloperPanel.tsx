import React, {
  useEffect
} from "react";

import {
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";

import {
  getDevices,
  toggleDevice,
  getQueue
} from "../services/device-api";

import {
  useDeviceStore
} from "../store/device-store";

export default function DeveloperPanel() {

  const {
    deviceAOnline,
    deviceBOnline,
    queueSize,
    setDeviceAOnline,
    setDeviceBOnline,
    setQueueSize
  } = useDeviceStore();

  async function refresh() {

    const devices =
      await getDevices();

    const queue =
      await getQueue();

    setDeviceAOnline(
      devices["device-a"]
        .online
    );

    setDeviceBOnline(
      devices["device-b"]
        .online
    );

    setQueueSize(
      queue.size
    );
  }

  useEffect(() => {

    refresh();

  }, []);

  return (

    <View
      style={
        styles.container
      }
    >

      <Text
        style={
          styles.title
        }
      >
        Developer Panel
      </Text>

      <Text>
        Device A:
        {
          deviceAOnline
            ? " Online"
            : " Offline"
        }
      </Text>

      <Text>
        Device B:
        {
          deviceBOnline
            ? " Online"
            : " Offline"
        }
      </Text>

      <Text>
        Queue Size:
        {queueSize}
      </Text>

      <Button
        title="Toggle Device A"
        onPress={
          async () => {

            await toggleDevice(
              "device-a"
            );

            refresh();
          }
        }
      />

      <Button
        title="Toggle Device B"
        onPress={
          async () => {

            await toggleDevice(
              "device-b"
            );

            refresh();
          }
        }
      />

      <Button
        title="Refresh"
        onPress={
          refresh
        }
      />

    </View>
  );
}

const styles =
  StyleSheet.create({

    container: {

      flex: 1,

      justifyContent:
        "center",

      padding: 20
    },

    title: {

      fontSize: 24,

      marginBottom: 20,

      fontWeight:
        "bold"
    }
  });