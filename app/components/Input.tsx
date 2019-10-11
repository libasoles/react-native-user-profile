import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";

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
    <View style={styles.container}>
      {icon && <Icon name={icon} style={styles.icon} size={22} />}
      <TextInput
        style={[styles.input, style]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.text.gray}
        clearTextOnFocus={clearTextOnFocus}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.lighter,
    borderColor: colors.dark,
    borderWidth: 1,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    color: colors.secondary,
    marginLeft: 10
  },
  input: {
    fontSize: 16,
    color: colors.text.dark,
    backgroundColor: colors.lighter,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1
  }
});
