import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import colors from "../config/colors";

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="small" color={colors.text.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
