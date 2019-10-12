import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../../config/colors";
import texts from "../../../config/texts";
import PersonalInfoType from "../../../types/personalInfo";
import TextFragment from "../../../components/TextFragment";
import Avatar from "./Avatar";
import TextButton from "../../../components/TextButton";
import dateToYears from "../../../helpers/dateToYears";

export default function PersonalInfo({ data }: { data: PersonalInfoType }) {
  const avatar = data.picture;
  const age = dateToYears(data.birthday);

  return (
    <>
      <View style={styles.image}>
        <Avatar src={avatar} />
      </View>
      <View style={styles.data}>
        <View>
          <TextFragment style={styles.name}>{data.displayName}</TextFragment>
          <TextFragment style={styles.age}>
            {age + " " + texts.profile.years}
          </TextFragment>
        </View>
        <TextButton>{texts.profile.editGenders}</TextButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  data: {
    marginLeft: 5,
    display: "flex",
    justifyContent: "space-between"
  },
  image: {
    marginRight: 10
  },
  name: {
    fontSize: 21,
    fontFamily: "ralewayBold",
    color: colors.text.dark,
    marginTop: 4,
    marginBottom: 4
  },
  age: {
    fontSize: 14,
    fontFamily: "lato",
    color: colors.text.secondary,
    marginTop: 2,
    marginBottom: 2
  },
  button: {
    backgroundColor: colors.lighter,
    color: colors.text.highlighted,
    padding: 2
  }
});
