import React, {
  useEffect,
  useState
} from "react";

import {
  View,
  Button
} from "react-native";

import ProgressCard
from "../../components/ProgressCard";

import {
  getProgress,
  completeTask
} from "../../services/syllabus-api";

export default function SyllabusPage() {

  const [progress,
    setProgress] =
    useState(0);

  async function refresh() {

    const data =
      await getProgress();

    setProgress(
      data.progress
    );
  }

  async function markDone() {

    await completeTask();

    refresh();
  }

  useEffect(() => {

    refresh();

  }, []);

  return (

    <View
      style={{
        padding: 20
      }}
    >

      <ProgressCard
        progress={progress}
      />

      <Button
        title="Complete Task"
        onPress={markDone}
      />

      <Button
        title="Refresh Progress"
        onPress={refresh}
      />

    </View>
  );
}