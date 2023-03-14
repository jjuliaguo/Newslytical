import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
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
import RegisterScreen from "./app/assets/screens/RegisterScreen";
//import { TextInput } from "react-native-gesture-handler";
const categories = [
  {label:"Local News", value:1},
  {label:"Policy Update", value:2},
  {label:"Celebratities and Entertainment", value:3},
]
export default function App() {
  const [category,setCategory]=useState()
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
  
    /*<AppSafeAreaView>
      <AppPicker 
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} 
        icon="apps" 
        placeholder="Categories"></AppPicker>
      <AppTextInput icon="apps" placeholder="Enter email"></AppTextInput>
 
  </AppSafeAreaView>*/
  
    //<AccountScreen/>
    <LoginScreen/>
    //<RegisterScreen/>
    //<MyPostsScreen/>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#e8e4e4",
    paddingTop: 100,
  },
});
