import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet
} from "react-native";

import {
  completeFocusSession,
  failFocusSession
} from "../../services/focus-api";

export default function FocusPage() {

  const [message, setMessage] =
    useState("");

  async function completeSession() {

    const result =
      await completeFocusSession(
        25,
        "device-a"
      );

    setMessage(
      `Completed: ${result.session.id}`
    );
  }

  async function failSession() {

    const result =
      await failFocusSession(
        "give_up",
        "device-a"
      );

    setMessage(
      `Failed: ${result.session.id}`
    );
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Focus Session
      </Text>

      <Button
        title="Complete 25 Minute Session"
        onPress={completeSession}
      />

      <View style={{ height: 12 }} />

      <Button
        title="Fail Session"
        onPress={failSession}
      />

      <View style={{ height: 20 }} />

      <Text>{message}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold"
  }
});