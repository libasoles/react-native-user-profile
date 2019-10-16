import React from "react";
import RNPickerSelect from "react-native-picker-select";

import colors from "../../../config/colors";
import status from "../../../enums/status";
import noAction from "../../../helpers/noAction";
import { StyleSheet } from "react-native";
import Icon from "../../../components/Icon";

type Props = {
  selected: string;
  onChange: () => void;
};

const statuses = Object.entries(status).map(([key, value]) => ({
  value: key,
  label: value
}));

export default function StatusPicker({
  selected,
  onChange = noAction,
}: Props) {
  return (
    <RNPickerSelect
      placeholder={{}}
      value={selected}
      onValueChange={onChange}
      items={statuses}
      useNativeAndroidPickerStyle={false}
      style={style}
      Icon={() => <Icon name="chevron-down" color={colors.text.lighter} />}
    />
  );
}

const shareStyle = {
  fontFamily: "raleway",
  fontSize: 18,
  color: colors.text.dark,
  paddingRight: 30,
  borderColor: colors.dark,
  borderWidth: 1,
  borderRadius: 6,
  paddingHorizontal: 10,
  paddingVertical: 10,
  marginVertical: 5,
};

const style = StyleSheet.create({
  inputIOS: {
    ...shareStyle
  },
  inputAndroid: {
    ...shareStyle
  },
  inputAndroidContainer: {
    marginVertical: 5,
    alignSelf: 'flex-start', // auto width
  },
  iconContainer: {
    flex: 1,
    paddingHorizontal: 6,
    paddingVertical: 9,
    backgroundColor: colors.bg.dark,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    top: 4,
    right: -20 // needed for auto-width
  }
});
