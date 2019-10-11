import React from "react";
import { Text } from "react-native";

type Props = {
  children: string
}

export default function AlibrateText({ children }: Props) {
  return <Text style={{ fontFamily: "raleway" }}>{children}</Text>;
}
