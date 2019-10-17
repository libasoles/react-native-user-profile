import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import colors from "../config/colors";
import Header from "./components/Header";
import Profile from "./components/Profile";
import StatusTabs from "./MyLibrary/StatusTabs";
import BoughtBooks from "./MyLibrary/BoughtBooks";

export default function MyLibrary() {
  const { stats, personalInfo } = useSelector(state => state.profile);

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
