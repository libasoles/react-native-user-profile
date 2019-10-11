import React from "react";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";

type Props = {
  name: string;
  color?: string;
};

export default function Icon({ name, color = colors.lighter }: Props) {
  return <Feather name={`${name}`} size={32} style={{ color }} />;
}
