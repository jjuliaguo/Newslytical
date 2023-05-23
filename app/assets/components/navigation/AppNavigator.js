import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AccountScreen, MyPostsScreen, PublishScreen } from "../../screens";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PublishTabButton from "./PublishTabButton";
import route from "./route";
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={route.HOME}
        component={FeedNavigator}
        options={{ 
          headerShown: false,
          tabBarIcon:({color,size})=><MaterialCommunityIcons name="home" color={color} size={size}/>
        }}
      />
      <Tab.Screen
        name={route.PUBLISH}
        component={PublishScreen}
        options={({navigation})=>({ 
          tabBarButton : ()=> <PublishTabButton onPress={() => navigation.navigate(route.PUBLISH)}/>,
          headerShown: false,
          //tabBarIcon:({color,size})=><MaterialCommunityIcons name="plus-circle" color={color} size={size}/>,
          
        })}
      />
      <Tab.Screen
        name={route.ACCOUNT}
        component={AccountNavigator}
        options={{ 
          headerShown: false,
          tabBarIcon:({color,size})=><MaterialCommunityIcons name="account" color={color} size={size}/>
        }}
      />
    </Tab.Navigator>
  );
}
