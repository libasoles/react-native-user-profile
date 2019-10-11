import React from 'react';
import { StyleSheet, View } from 'react-native';

import AlibrateText from "../components/AlibrateText";
import Header from "../components/Header";

export default function MyLibrary() {
  return (
    <View style={styles.container}>
      <Header />
      <AlibrateText>Profile Header</AlibrateText>
      <AlibrateText>Bought books</AlibrateText>
      <AlibrateText>Library Tabs</AlibrateText>
      <AlibrateText>Bottom navbar</AlibrateText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
