import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyPostsScreen, NewsDetailScreen } from '../../screens';

const Stack = createStackNavigator();



export default function FeedNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="MyPosts" component={MyPostsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen}/>
      </Stack.Navigator>
    );
  }