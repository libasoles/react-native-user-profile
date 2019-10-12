import React from "react";
import { Image, StyleSheet, View } from "react-native";

import config from "../../config";
import colors from "../../config/colors";
import BookType from "../../types/book";
import TextFragment from "../../components/TextFragment";
import Icon from "../../components/Icon";

type Props = {
  data: BookType;
};

export default function Book({ data }: Props) {
  const { cover, genre, title, author } = data;
  const image = `${config.books.baseURI}/${cover}/small`;

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.data}>
        <TextFragment style={styles.genre}>{genre}</TextFragment>
        <TextFragment style={styles.title}>{title}</TextFragment>
        <TextFragment style={styles.author}>{author}</TextFragment>
      </View>
      <View>
        <Icon style={styles.dots} name="more-vertical" size={26} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    height: 190,
    width: 120,
    borderRadius: 3
  },
  data: {
    flex: 1
  },
  genre: {
    fontSize: 12,
    fontFamily: "lato",
    color: colors.text.secondary
  },
  title: {
    fontSize: 18,
    fontFamily: "ralewayBold",
    color: colors.text.dark,
    marginTop: 2,
    marginBottom: 2
  },
  author: {
    fontSize: 14,
    fontFamily: "lato",
    color: colors.text.secondary
  },
  dots: {
    margin: 5,
    marginTop: 10,
    color: colors.text.secondary
  }
});
