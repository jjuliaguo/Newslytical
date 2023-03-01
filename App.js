import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import WelcomeScreen from "./app/assets/screens/WelcomeScreen";
import AppButton from "./app/assets/components/AppButton";
import AppCard from "./app/assets/components/AppCard";
import AppText from "./app/assets/components/AppText";
import NewsDetailScreen from "./app/assets/screens/NewsDetailScreen";
import AccountScreens from "./app/assets/screens/AccountScreen";
import AppListItem from "./app/assets/components/AppListItem";
import AppIcon from "./app/assets/components/AppIcon";
import MessageScreen from "./app/assets/screens/MessageScreen";
import AppSafeAreaView from "./app/assets/components/AppSafeAreaView";
import LoginScreen from "./app/assets/screens/LoginScreen";
import AccountScreen from "./app/assets/screens/AccountScreen";
import MyPostsScreen from "./app/assets/screens/MyPostsScreen";
import AppPicker from "./app/assets/components/AppPicker";
import AppTextInput from "./app/assets/components/AppTextInput";
import {MaterialCommunityIcons, Entypo} from '@expo/vector-icons'
//import { TextInput } from "react-native-gesture-handler";

export default function App() {
  return (
    //<SafeAreaView><AppButton title="Login" onPress={()=>console.log("login btn pressed")}/></SafeAreaView>
    //<WelcomeScreen/>
    //<NewsDetailScreen/>
    //<View style={styles.mainView}><AppCard></AppCard></View>
    //<AccountScreens/>
    //<SafeAreaView><AppListItem title="Josephen Roger" subTitle="Jan 08, 2022" image={require("./app/assets/profile.jpeg")}></AppListItem></SafeAreaView>
    //<SafeAreaView><AppIcon name="email" size={50} backgroundColor="red" iconColor="#fff"/></SafeAreaView>
   // <MessageScreen/>
    //<AppSafeAreaView></AppSafeAreaView>
    //<LoginScreen/>
    
    <AppSafeAreaView>
      <AppPicker icon="apps" placeholder="Enter email"></AppPicker>
      <AppTextInput icon="apps" placeholder="Enter email"></AppTextInput>
      <AppIcon name="email" size={70} backgroundColor="yellow" iconColor="red"/>
      <AppIcon name="trash-can" size={70} backgroundColor="#888669" iconColor="green"/>
       <AppButton title="LOGIN"/>
      
    </AppSafeAreaView>
  
    //<AccountScreen/>
    //<MyPostsScreen/>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#e8e4e4",
    paddingTop: 100,
  },
});
