import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground source={require("./bg.jpg")} style={styles.background}>
      <Image></Image>
      <Text style={styles.subTitle}>Know What Happended Today</Text>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  subTitle:{
    color:"red",
    fontSize:"24pxic"
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#45E733",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#515053",
  },
});
