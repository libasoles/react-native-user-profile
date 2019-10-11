import React from "react";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";

type Props = {
  name: string;
  color?: string;
  size?: number;
  style?: {};
};

export default function Icon({
  name,
  style = {},
  size = 32,
  color = colors.lighter
}: Props) {
  return <Feather name={name} size={size} style={[{ color }, style]} />;
}
