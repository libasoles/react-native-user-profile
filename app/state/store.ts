import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import auth from "./login/reducer";
import books from "./myLibrary/reducer";

const reducers = combineReducers({
  auth,
  books
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(thunk));
}
