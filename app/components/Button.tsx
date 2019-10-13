import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";

import colors from "../config/colors";
import TextFragment from "./TextFragment";
import noAction from "../helpers/noAction";

type Props = {
  children: string;
  style?: {};
  onPress?: () => void;
};

export default function Button({
  children,
  style = {},
  onPress = noAction
}: Props) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.bg.lighter}
      activeOpacity={0.7}
    >
      <TextFragment style={[styles.button, style]}>{children}</TextFragment>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontFamily: "ralewayBold",
    fontSize: 17,
    color: colors.text.dark,
    backgroundColor: colors.bg.lighter,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: colors.text.dark,
    borderRadius: 5,
    height: 55,
    padding: 10
  }
});
