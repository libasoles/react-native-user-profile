import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../config/colors";

type Props = {
  value?: string;
  placeholder?: string;
  onChange?: () => void;
};

export default function SearchBox({
  value = "",
  placeholder = "Buscar...",
  onChange = () => {}
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.text.gray}
        clearTextOnFocus={true}
        onChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40
  },
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
