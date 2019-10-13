import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import Input from "../../components/Input";

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
    <Input
      style={styles.input}
      icon="search"
      value={value}
      placeholder={placeholder}
      clearTextOnFocus={true}
      onChange={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    height: 40,
    paddingLeft: 10,
  }
});
