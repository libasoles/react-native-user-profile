import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";
import noAction from "../helpers/noAction";

type Props = {
  value?: string;
  placeholder?: string;
  icon?: string;
  style?: {};
  clearTextOnFocus?: boolean;
  onChange?: (e: any) => void;
};

export default function Input({
  value = "",
  placeholder = "",
  icon = null,
  style = {},
  clearTextOnFocus = false,
  onChange = noAction
}: Props) {
  return (
    <View style={[styles.container, style]}>
      {icon && <Icon name={icon} style={styles.icon} size={22} />}
      <TextInput
        style={styles.input}
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
    height: 55,
    backgroundColor: colors.lighter,
    borderColor: colors.dark,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    color: colors.secondary,
    marginLeft: 10
  },
  input: {
    borderWidth: 0,
    fontSize: 18,
    color: colors.text.dark,
    paddingLeft: 15,
    flex: 1
  }
});
