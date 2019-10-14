import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import Button from "../../components/Button";
import noAction from "../../helpers/noAction";

type Props = {
  children: string;
  style?: {};
  onPress?: () => void;
};

export default function TransparentButton({
  children,
  style = [],
  onPress = noAction
}: Props) {
  return (
    <Button
      style={[styles.button, style]}
      underlayColor="transparent"
      onPress={onPress}
    >
      {children}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    color: colors.text.light
  }
});
