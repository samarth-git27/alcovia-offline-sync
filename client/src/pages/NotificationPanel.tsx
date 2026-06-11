import React, {
  useState
} from "react";

import {
  View,
  Text,
  Button
} from "react-native";

import {
  sendNotification
} from "../services/notification-api";

export default function NotificationPanel() {

  const [
    result,
    setResult
  ] = useState("");

  async function trigger() {

    const response =
      await sendNotification();

    setResult(
      JSON.stringify(
        response
      )
    );
  }

  return (

    <View
      style={{
        padding: 20
      }}
    >

      <Text
        style={{
          fontSize: 24,
          fontWeight:
            "bold"
        }}
      >
        Notifications
      </Text>

      <Button
        title="Send Notification"
        onPress={
          trigger
        }
      />

      <Text>
        {result}
      </Text>

    </View>
  );
}