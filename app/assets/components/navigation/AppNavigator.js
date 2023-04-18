import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AccountScreen, MyPostsScreen, PublishScreen } from '../../screens';
import FeedNavigator from './FeedNavigator';
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={FeedNavigator} options={{headerShown:false}}/>
        <Tab.Screen name="Publish" component={PublishScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Account" component={AccountScreen} options={{headerShown:false}}/>


    </Tab.Navigator>
  )
}

