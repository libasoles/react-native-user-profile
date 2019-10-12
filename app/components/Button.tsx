import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import TextFragment from "./TextFragment";
import noAction from "../helpers/noAction";

type Props = {
  children: string;
  onPress?: () => void;
};

export default function Button({ children, onPress = noAction }: Props) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
      underlayColor={colors.bg.lighter}
      activeOpacity={0.7}
    >
      <TextFragment style={styles.text}>{children}</TextFragment>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.bg.lighter,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.text.dark,
    borderRadius: 5
  },
  text: {
    fontSize: 15,
    fontFamily: "lato",
    color: colors.text.dark
  }
});
