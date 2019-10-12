import React from "react";
import { Text } from "react-native";

import colors from "../config/colors";

type Props = {
  children: string;
  style?: {};
};

export default function TextFragment({ children, style = {} }: Props) {
  return <Text style={[defaultStyle, style]}>{children}</Text>;
}

const defaultStyle = {
  fontFamily: "raleway",
  color: colors.text.primary
};
