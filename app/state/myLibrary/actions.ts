import { api } from "../../services/api";
import toQueryString from "../../helpers/queryString";
import { BOOKS_LOADED, BOOKS_LOADING_ERROR, LOADING_BOOKS } from "./reducer";
import { serializeBooks } from "./serializers";

function loadingAction() {
  return {
    type: LOADING_BOOKS
  };
}

function booksLoadedAction({
  status,
  data,
  page,
  pages
}) {
  return {
    type: BOOKS_LOADED,
    payload: {
      list: serializeBooks(data),
      page,
      pages,
      status
    }
  };
}

function booksLoadingErrorAction() {
  return {
    type: BOOKS_LOADING_ERROR
  };
}

export function fetchBooks({ status, sort = "rating", limit = 5, page = 1 }) {
  return dispatch => {
    const queryString = toQueryString({
      page,
      limit,
      sort,
      status
    });

    dispatch(loadingAction());

    api
      .get("/library/user/me?" + queryString)
      .then(({ data }) => {
        dispatch(
          booksLoadedAction({
            status,
            data: data.docs,
            pages: data.pages,
            page: data.page
          })
        );
      })
      .catch(() => {
        dispatch(booksLoadingErrorAction);
      });
  };
}
