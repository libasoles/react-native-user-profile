import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import TextFragment from "./TextFragment";
import noAction from "../helpers/noAction";

type Props = {
  children: string;
  style?: {};
  onPress?: () => void;
};

export default function TextButton({
  children,
  style = {},
  onPress = noAction
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <TextFragment style={[styles.text, style]}>{children}</TextFragment>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    padding: 2
  },
  text: {
    fontFamily: "lato",
    color: colors.text.highlighted
  }
});
