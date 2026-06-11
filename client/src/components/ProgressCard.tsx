import React from "react";

import {
  View,
  Text,
  StyleSheet
} from "react-native";

interface Props {
  progress: number;
}

export default function ProgressCard(
  { progress }: Props
) {

  return (

    <View style={styles.card}>

      <Text style={styles.title}>
        Syllabus Progress
      </Text>

      <Text style={styles.value}>
        {progress}%
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {

    padding: 20,

    borderWidth: 1,

    marginVertical: 12
  },

  title: {
    fontSize: 18
  },

  value: {
    fontSize: 30,
    fontWeight: "bold"
  }
});