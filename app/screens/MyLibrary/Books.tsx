import React, { useCallback, useEffect, useState } from "react";
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
  setPage: () => void;
  pages: number;
};

function useBooks({ status }): Returns {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks({ status, page }));
  }, [page]);

  return useSelector(state => {
    const { loading, lists } = state.books;
    const { pages, page, list } = lists[status];

    return {
      list,
      loading,
      setPage: useCallback(() => {
        const shouldFetchNextPage = page < pages;

        if (shouldFetchNextPage) {
          setPage(page + 1);
        }
      }, [page, pages])
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
  const { loading, list, setPage } = useBooks({ status });
  const hasBooks = list.length > 0;

  if (!loading && !hasBooks) return <NoBooks />;

  return (
    <View style={styles.container}>
      {hasBooks && (
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Book data={item} />}
          onEndReached={setPage}
        />
      )}
      {loading && <Loading />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginBottom: 20
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
