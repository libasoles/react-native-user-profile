import React from "react";
import { Image, StyleSheet, View } from "react-native";

import texts from "../../config/texts";
import colors from "../../config/colors";
import BookType from "../../types/book";
import TextFragment from "../../components/TextFragment";
import Icon from "../../components/Icon";
import StatusPicker from "./Book/StatusPicker";
import noAction from "../../helpers/noAction";
import Stars from "./Book/Stars";

type Props = {
  data: BookType;
};

export default function Book({ data }: Props) {
  const { cover, genre, title, author, rating, status } = data;

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: cover }} />
      </View>
      <View style={styles.data}>
        <Details data={{ genre, title, author }} />
        <Rating points={rating} />
        <StatusPicker selected={status} onChange={noAction} />
      </View>
      <View>
        <Icon style={styles.dots} name="more-vertical" size={26} />
      </View>
    </View>
  );
}

function Details({ data }) {
  const { genre, title, author } = data;

  return (
    <View>
      <TextFragment style={styles.genre}>{genre}</TextFragment>
      <TextFragment style={styles.title}>{title}</TextFragment>
      <TextFragment style={styles.author}>{author}</TextFragment>
    </View>
  );
}

function Rating({ points }) {
  return (
    <>
      <Stars style={styles.stars} />
      <TextFragment style={styles.ratingLabel}>
        {`${texts.myLibrary.rating}: `}
        <TextFragment style={styles.rating}>{points}</TextFragment>
      </TextFragment>
    </>
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
    flex: 1,
    marginLeft: 12
  },
  genre: {
    fontSize: 12,
    fontFamily: "lato",
    color: colors.text.secondary
  },
  title: {
    fontSize: 18,
    fontFamily: "ralewayBold",
    color: colors.text.primary,
    marginTop: 2,
    marginBottom: 2
  },
  author: {
    fontSize: 14,
    fontFamily: "lato",
    color: colors.text.secondary
  },
  ratingLabel: {
    color: colors.text.secondary
  },
  stars: {
    marginVertical: 10
  },
  rating: {
    color: colors.text.primary,
    fontFamily: "ralewayBold"
  },
  dots: {
    margin: 5,
    marginTop: 10,
    color: colors.text.secondary
  }
});
