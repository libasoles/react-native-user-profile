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
    maxHeight: 300,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20
  },
  profile: {
    height: 80
  },
  socialData: {
    marginTop: 10
  }
});
