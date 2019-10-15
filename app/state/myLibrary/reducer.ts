import ReduxAction from "../../types/reduxAction";
import BookType from "../../types/book";

const initialState = {
  loading: false,
  lists: {
    readed: { list: [], pages: 1, page: 1 },
    reading: { list: [], pages: 1, page: 1 },
    wantToRead: { list: [], pages: 1, page: 1 },
    abandoned: { list: [], pages: 1, page: 1 }
  }
};

export const LOADING_BOOKS = "LOADING_BOOKS";
export const BOOKS_LOADED = "BOOKS_LOADED";
export const BOOKS_LOADING_ERROR = "BOOKS_LOADING_ERROR";

type Payload = {
  list: BookType[];
  status: string;
  page: number;
  pages: number;
};

export default function books(
  state = initialState,
  action: ReduxAction<Payload>
) {
  switch (action.type) {
    case LOADING_BOOKS:
      return {
        ...state,
        loading: true
      };
    case BOOKS_LOADED:
      const { status, list, page, pages } = action.payload;
      return {
        ...state,
        loading: false,
        lists: {
          ...state.lists,
          [status]: {
            list,
            page,
            pages
          }
        }
      };
    case BOOKS_LOADING_ERROR:
      return {
        ...state,
        loading: false,
        list: []
      };
    default:
      return state;
  }
}
