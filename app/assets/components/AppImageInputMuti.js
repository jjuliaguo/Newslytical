import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppImageInput from "./AppImageInput";

export default function AppImageInputMuti({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View key={uri} style={styles.image}>
          <AppImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      ))}
      <AppImageInput onChangeImage={(uri) => onAddImage(uri)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image:{
    marginRight:10,
  }
});
