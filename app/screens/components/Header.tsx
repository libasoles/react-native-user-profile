import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "react-native";

import Icon from "../../components/Icon";
import texts from "../../config/texts";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <>
      <View style={{ height: StatusBar.currentHeight }} />
      <View style={styles.container}>
        <View style={styles.section}>
          <Icon name="menu" />
        </View>
        <View style={[styles.section, styles.searchBox]}>
          <SearchBox placeholder={texts.searchBox.booksAndAuthors} />
        </View>
        <View style={styles.section}>
          <Icon name="bell" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1c4865",
    justifyContent: "space-around",
    alignItems: "center",
    maxHeight: 60,
    paddingLeft: 10,
    paddingRight: 10
  },
  section: { margin: 10 },
  searchBox: { flex: 1 }
});
