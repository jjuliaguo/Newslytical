import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import AppSafeAreaView from "./app/assets/components/AppSafeAreaView";

import * as ImagePicker from "expo-image-picker";
import AppImageInput from "./app/assets/components/AppImageInput";
import AppImageInputMuti from "./app/assets/components/AppImageInputMuti";
import PublishScreen from "./app/assets/screens/PublishScreen";

export default function App() {
  //const [imageUris, setImageUris] = useState([]);

  return (

   <PublishScreen/>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
