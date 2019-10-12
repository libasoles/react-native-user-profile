import React from "react";
import { StyleSheet, View } from "react-native";

import StatsType from "../../types/stats";
import PersonalInfoType from "../../types/personalInfo";
import Stats from "./profile/Stats";
import PersonalInfo from "./profile/PersonalInfo";

type Props = { personalInfo: PersonalInfoType; stats: StatsType };

export default function Profile({ personalInfo, stats }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <PersonalInfo data={personalInfo} />
      </View>
      <View style={styles.socialData}>
        <Stats data={stats} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    maxHeight: 300,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 20
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    height: 80
  },
  socialData: {
    marginTop: 10
  }
});
