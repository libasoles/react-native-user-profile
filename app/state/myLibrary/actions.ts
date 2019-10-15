import { api } from "../../services/api";
import toQueryString from "../../helpers/queryString";
import { BOOKS_LOADED, BOOKS_LOADING_ERROR, LOADING_BOOKS } from "./reducer";
import { serializeBooks } from "./serializers";

function loadingAction() {
  return {
    type: LOADING_BOOKS
  };
}

function booksLoadedAction(status, data) {
  return {
    type: BOOKS_LOADED,
    payload: {
      list: serializeBooks(data),
      status
    }
  };
}

function booksLoadingErrorAction() {
  return {
    type: BOOKS_LOADING_ERROR
  };
}

export function fetchBooks({ status, sort = "rating", limit = 10, page = 1 }) {
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
        dispatch(booksLoadedAction(status, data.docs));
      })
      .catch(() => {
        dispatch(booksLoadingErrorAction);
      });
  };
}
