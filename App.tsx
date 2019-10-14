import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";

import Providers from "./app/Providers";
import AppGateway from "./app/AppGateway";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFonts().then(() => setLoading(false));
  }, []);

  return (
    !loading && (
      <Providers>
        <AppGateway />
      </Providers>
    )
  );
}

function loadFonts() {
  return Font.loadAsync({
    ...Feather.font,
    raleway: require("./assets/fonts/Raleway-Regular.ttf"),
    ralewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
    lato: require("./assets/fonts/Lato-Regular.ttf"),
    latoBold: require("./assets/fonts/Lato-Bold.ttf")
  });
}
export default App;
