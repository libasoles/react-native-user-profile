import React from "react";
import { Picker } from "react-native";

import texts from "../../config/texts";
import noAction from "../../helpers/noAction";

export default function BoughtBooks() {
  return (
    <Picker
      selectedValue={"dummy"}
      style={{ height: 80 }}
      onValueChange={noAction}
    >
      <Picker.Item label={texts.myLibrary.boughtBooks} value={"dummy"} />
    </Picker>
  );
}
