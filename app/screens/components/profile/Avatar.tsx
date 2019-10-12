import React from "react";
import { StyleSheet, View, Image } from "react-native";

type Props = {
  src: string;
  width?: number;
  height?: number;
};

export default function Avatar({ width = 80, height = 80, src }: Props) {
  const dimensions = {
    width,
    height,
    borderRadius: width / 2
  };

  return (
    <View style={styles.container}>
      <Image style={[dimensions, styles.image]} source={{ uri: src }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden"
  },
  image: {}
});
