import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Header from "./components/Header";
import Profile from "./components/Profile";
import StatusTabs from "./MyLibrary/StatusTabs";
import BoughtBooks from "./MyLibrary/BoughtBooks";

const stats = {
  libraryBooks: 19,
  reviews: 7,
  followers: 5,
  following: 15,
  lists: 2
};

const personalInfo = {
  picture:
    "https://cdn.alibrate.com/profile/5d9b59d94658423d425a4085/a208c761-5fc1-4856-9e2e-ce6ff001b292/small",
  displayName: "libasoles",
  birthday: "1978-12-24T03:00:00.000Z"
};

export default function MyLibrary() {
  return (
    <View style={styles.container}>
      <Header />
      <Profile stats={stats} personalInfo={personalInfo} />
      <BoughtBooks />
      <StatusTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.lighter
  }
});
