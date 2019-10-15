import React from "react";
import { View } from "react-native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import TextFragment from "../../components/TextFragment";

export default function NoBooks() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.bg.neuter,
        alignItems: "center"
      }}
    >
      <TextFragment style={{ fontSize: 24, color: colors.text.primary }}>
        {texts.myLibrary.isEmpty}
      </TextFragment>
    </View>
  );
}
