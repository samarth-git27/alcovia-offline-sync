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

import SyncDashboard
from "./src/pages/SyncDashboard";

import DeviceSimulator
from "./src/pages/DeviceSimulator";

import NotificationPanel
from "./src/pages/NotificationPanel";

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

        <SyncDashboard />

        <DeviceSimulator />

        <NotificationPanel />

      </ScrollView>

    </SafeAreaView>
  );
}