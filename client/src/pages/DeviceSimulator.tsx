import React, {
  useState
} from "react";

import {
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";

import {
  completeFocusSession
} from "../services/focus-api";

export default function DeviceSimulator() {

  const [
    deviceALog,
    setDeviceALog
  ] = useState("");

  const [
    deviceBLog,
    setDeviceBLog
  ] = useState("");

  async function createEventA() {

    const result =
      await completeFocusSession(
        25,
        "device-a"
      );

    setDeviceALog(
      result.event.id
    );
  }

  async function createEventB() {

    const result =
      await completeFocusSession(
        30,
        "device-b"
      );

    setDeviceBLog(
      result.event.id
    );
  }

  return (

    <View
      style={styles.container}
    >

      <Text
        style={styles.title}
      >
        Device Simulator
      </Text>

      <View
        style={styles.card}
      >

        <Text>
          Device A
        </Text>

        <Button
          title="Create Event"
          onPress={
            createEventA
          }
        />

        <Text>
          {deviceALog}
        </Text>

      </View>

      <View
        style={styles.card}
      >

        <Text>
          Device B
        </Text>

        <Button
          title="Create Event"
          onPress={
            createEventB
          }
        />

        <Text>
          {deviceBLog}
        </Text>

      </View>

    </View>
  );
}

const styles =
  StyleSheet.create({

    container: {
      padding: 20
    },

    title: {
      fontSize: 24,
      fontWeight:
        "bold",
      marginBottom: 20
    },

    card: {
      borderWidth: 1,
      padding: 15,
      marginBottom: 15
    }
  });