import React from "react";
import { Text } from "react-native";

import colors from "../config/colors";

type Props = {
  children: string;
  style?: {};
};

export default function TextFragment({ children, style = {}, ...rest }: Props) {
  return (
    <Text style={[defaultStyle, style]} {...rest}>
      {children}
    </Text>
  );
}

const defaultStyle = {
  fontFamily: "raleway",
  color: colors.text.primary
};
