import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import texts from "../../config/texts";
import BookType from "../../types/book";
import Book from "../components/Book";
import TextFragment from "../../components/TextFragment";

type Props = {
  list?: BookType[];
};

function NoBooks() {
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

export default function Books({ list = [] }: Props) {
  if (!list.length) return <NoBooks />;

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Book data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20
  }
});
