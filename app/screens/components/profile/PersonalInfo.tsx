import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../../config/colors";
import texts from "../../../config/texts";
import PersonalInfoType from "../../../types/personalInfo";
import TextFragment from "../../../components/TextFragment";
import Avatar from "./Avatar";
import TextButton from "../../../components/TextButton";
import dateToYears from "../../../helpers/dateToYears";
import Button from "../../../components/Button";

export default function PersonalInfo({ data }: { data: PersonalInfoType }) {
  const avatar = data.picture;
  const age = dateToYears(data.birthday);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
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
      </View>
      <View style={styles.editProfile}>
        <Button style={{ fontSize: 15 }}>{texts.profile.edit}</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  profile: {
    flexDirection: "row"
  },
  data: {
    marginLeft: 5,
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
  editProfile: {
    justifyContent: "center"
  }
});
