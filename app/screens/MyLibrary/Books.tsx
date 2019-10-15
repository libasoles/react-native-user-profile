import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import colors from "../../config/colors";
import BookType from "../../types/book";
import { fetchBooks } from "../../state/myLibrary/actions";
import Book from "./Book";
import NoBooks from "./NoBooks";

type Returns = {
  list: BookType[];
  loading: boolean;
  page: number;
  pages: number;
};

function useBooks({ status }): Returns {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks({ status }));
  }, []);

  return useSelector(state => {
    const { loading, lists } = state.books;

    return {
      list: lists[status].list,
      loading
    };
  });
}

function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="small" color={colors.text.secondary} />
    </View>
  );
}

export default function Books(props) {
  const { status } = props.navigation.state.params;
  const { loading, list } = useBooks({ status });

  if (loading) return <Loading />;

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
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
