import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../config/colors";

type Props = {
  value?: string;
  placeholder?: string;
  icon?: string;
  style?: {};
  clearTextOnFocus?: boolean;
  onChange?: () => void;
};

export default function Input({
  value = "",
  placeholder = "",
  icon = "",
  style = {},
  clearTextOnFocus = false,
  onChange = () => {}
}: Props) {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.text.gray}
      clearTextOnFocus={clearTextOnFocus}
      onChange={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    borderColor: colors.dark,
    color: colors.text.dark,
    backgroundColor: colors.lighter,
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1
  }
});
