import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import BookType from "../../types/book";
import { fetchBooks } from "../../state/myLibrary/actions";
import Book from "./Book";
import NoBooks from "./NoBooks";
import Loading from "../../components/Loading";

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
  }
});
