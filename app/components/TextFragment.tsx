import React from "react";
import { Text } from "react-native";

type Props = {
  children: string
}

export default function TextFragment({ children }: Props) {
  return <Text style={{ fontFamily: "raleway" }}>{children}</Text>;
}
