import React from 'react';
import { StyleSheet, View } from 'react-native';

import AlibrateText from "../components/AlibrateText";

export default function MyLibrary() {
  return (
    <View style={styles.container}>
      <AlibrateText>Library</AlibrateText>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
