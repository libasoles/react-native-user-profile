import React from "react";
import { View } from "react-native";

import colors from "../../../config/colors";
import Icon from "../../../components/Icon";

function Star() {
  return (
    <Icon
      name="star"
      color={colors.secondary}
      size={20}
      style={{ marginRight: 4 }}
    />
  );
}

export default function Stars({ style }) {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </View>
  );
}
