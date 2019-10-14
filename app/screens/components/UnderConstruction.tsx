import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import TextFragment from "../../components/TextFragment";

export default function UnderConstruction() {
  return (
    <View style={styles.container}>
      <TextFragment style={{fontSize: 32}}>En construcción</TextFragment>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.lighter,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  }
});
