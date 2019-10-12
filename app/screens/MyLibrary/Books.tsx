import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import BookType from "../../types/book";
import Book from "../components/Book";

type Props = {
  list: BookType[];
};

export default function Books({ list }: Props) {
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
