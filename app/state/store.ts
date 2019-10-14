import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import auth from "./login/reducer";

const reducers = combineReducers({
  auth
});

export default function configureStore() {
  return createStore(reducers, applyMiddleware(thunk));
}
