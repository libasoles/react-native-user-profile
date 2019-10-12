import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import TextFragment from "./TextFragment";

type Props = {
  children: string;
};

export default function TextButton({ children }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <TextFragment style={styles.text}>{children}</TextFragment>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lighter,
    padding: 2
  },
  text: {
    fontFamily: "lato",
    color: colors.text.highlighted
  }
});
