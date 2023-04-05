import React, { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, Image } from "react-native";
import AppSafeAreaView from "./app/assets/components/AppSafeAreaView";

import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync;
    //retrun fn
    if (!granted) alert("Please allow app to use your camera roll");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsMultipleSelection: false,
      });
      if (!result.canceled) setImageUri(result.assets[0].uri);
    } catch (error) {
      console.log("Error !! Something goes wrong", error);
    }
  };
  return (
    <AppSafeAreaView>
      <Button title="Select Image" onPress={selectImage}></Button>
      <Image style={styles.image} source={{ uri: imageUri }} />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
