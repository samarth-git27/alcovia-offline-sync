import React from "react";

import {
  SafeAreaView,
  ScrollView
} from "react-native";

import DeveloperPanel
from "./src/pages/DeveloperPanel";

import FocusPage
from "./src/features/focus/FocusPage";

import SyllabusPage
from "./src/features/syllabus/SyllabusPage";

export default function App() {

  return (

    <SafeAreaView
      style={{
        flex: 1
      }}
    >

      <ScrollView>

        <DeveloperPanel />

        <FocusPage />

        <SyllabusPage />

      </ScrollView>

    </SafeAreaView>
  );
}