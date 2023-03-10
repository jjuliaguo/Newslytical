import { StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import AppListItem from "../components/AppListItem";
import AppSafeAreaView from "../components/AppSafeAreaView";
import AppListItemSeparator from "../components/AppListItemSeparator";
import colors from "../config/colors";
import AppListItemDeletable from "../components/AppListItemDeletable";
//import { StatusBar } from 'expo-status-bar'

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../p1.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../profile.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../p1.jpg"),
  },
];

export default function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    //Delete the message from message
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    //console.log(newMessages[0]);
  };

  return (
    <AppSafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Messge --", item)}
            renderRightActions={() => (
              <AppListItemDeletable onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <AppListItemSeparator style={{ backgroundColor: colors.light }} />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../p1.jpg"),
            },
          ]);
        }}
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({});
