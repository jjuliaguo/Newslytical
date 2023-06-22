import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AccountScreen,
  LoginScreen,
  NewsDetailScreen,
  PublishScreen,
  WelcomeScreen,
} from "./app/assets/screens";
import AuthNavigator from "./app/assets/components/navigation/AuthNavigator";
import navigationTheme from "./app/assets/components/navigation/navigationTheme";
import AppNavigator from "./app/assets/components/navigation/AppNavigator";
import FeedNavigator from "./app/assets/components/navigation/FeedNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";

function Feed() {
  return <NewsDetailScreen />;
}

function Profile() {
  return <AccountScreen />;
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificaions"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  //const unsubscribe = NetInfo.addEventListener((netInfo) => console.log(netInfo))m
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({id:1}));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value)
      console.log(value)

    } catch (error){
      console.log(error);
    } 
  };

  demo();
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
