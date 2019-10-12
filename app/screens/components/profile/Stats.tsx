import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../../config/colors";
import texts from "../../../config/texts";
import StatsType from "../../../types/stats";
import TextFragment from "../../../components/TextFragment";

type Props = {
  data: StatsType;
  labels?: {};
};

type Cell = { label: string; value: number };

function Cell({ label, value }: Cell) {
  return (
    <View style={styles.cell}>
      <TextFragment style={styles.value}>{value.toString()}</TextFragment>
      <TextFragment style={styles.label}>{label}</TextFragment>
    </View>
  );
}

export default function Stats({ data, labels = texts.profile.stats }: Props) {
  const keyValuePairs = Object.entries(data);

  return (
    <View style={styles.container}>
      {keyValuePairs.map(([keyName, value]) => (
        <View key={keyName} testID={keyName}>
          <Cell label={labels[keyName]} value={value} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10
  },
  cell: {
    display: "flex"
  },
  value: {
    fontSize: 21,
    fontFamily: "latoBold",
    color: colors.text.dark
  },
  label: {
    fontSize: 16,
    fontFamily: "lato",
    color: colors.text.dark
  }
});
