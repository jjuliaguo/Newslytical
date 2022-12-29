import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import AppButton from "../components/AppButton";
import React from "react";
import colors from "../config/colors";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground source={require("./workplace.jpg")} blurRadius={2} style={styles.background}>
      <View style={styles.iconContainer}>
        <Image source={require("../icon-removebg.png")} style={styles.icon}></Image>
        <Text style={styles.tagLine}>Know What                                        </Text>
        <Text style={styles.tagLine2}>                                             Happens Today</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" bgColor="primary"  />
        <AppButton title="Register" bgColor="primaryD3" textColor="white" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"center"
  },

  iconContainer:{
    
    position:"absolute",
    top:20,
    //backgroundColor:"blue",
    justifyContent: "center",
    alignItems:"center",
    
  },
  icon: {
    width:150,
    height:150,
    alignItems:"center",
  },
  tagLine:{
    fontSize:24,
    fontWeight: "600",
    paddingVertical:5,
    color:colors.black
  },
  tagLine2:{
    fontSize:22,
    fontWeight: "600",
    paddingVertical:0,
    color:colors.black
  },
  buttonContainer: {
    /*flex:1,
    backgroundColor:"green",*/
    padding:20,
    width:"100%",
    justifyContent: "flex-end",
  }
});
