import React from 'react';
import { StyleSheet, View } from 'react-native';

import TextFragment from "../components/TextFragment";
import Header from "./components/Header";

export default function MyLibrary() {
  return (
    <View style={styles.container}>
      <Header />
      <TextFragment>Profile Header</TextFragment>
      <TextFragment>Bought books</TextFragment>
      <TextFragment>Library Tabs</TextFragment>
      <TextFragment>Bottom navbar</TextFragment>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
