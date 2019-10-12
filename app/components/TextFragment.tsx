import React from "react";
import { Text } from "react-native";

type Props = {
  children: string;
  style?: {};
};

export default function TextFragment({ children, style = {} }: Props) {
  return <Text style={[{ fontFamily: "raleway" }, style]}>{children}</Text>;
}
