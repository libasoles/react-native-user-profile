import React, {useEffect, useState} from "react";
import * as Font from 'expo-font';

import MyLibrary from "./app/screens/MyLibrary";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Font.loadAsync({
      'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
      'lato': require('./assets/fonts/Lato-Regular.ttf'),
    }).then(() => setLoading(false));
  }, []);

  return !loading && <MyLibrary />;
}
