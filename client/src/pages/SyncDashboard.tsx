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
  syncDevice
} from "../services/sync-api";

export default function SyncDashboard() {

  const [result,
    setResult] =
    useState<any>(null);

  async function syncA() {

    const data =
      await syncDevice(
        "device-a"
      );

    setResult(data);
  }

  async function syncB() {

    const data =
      await syncDevice(
        "device-b"
      );

    setResult(data);
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Sync Dashboard
      </Text>

      <Button
        title="Sync Device A"
        onPress={syncA}
      />

      <View
        style={{
          height: 10
        }}
      />

      <Button
        title="Sync Device B"
        onPress={syncB}
      />

      <View
        style={{
          height: 20
        }}
      />

      <Text>
        {JSON.stringify(
          result,
          null,
          2
        )}
      </Text>

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
      marginBottom: 20,
      fontWeight:
        "bold"
    }
  });