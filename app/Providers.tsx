import React from "react";
import { Provider } from "react-redux";

import configureStore from "./state/store";

let store = configureStore();

function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
