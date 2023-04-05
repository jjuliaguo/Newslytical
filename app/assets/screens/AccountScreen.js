import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import AppSafeAreaView from "../components/AppSafeAreaView";
import AppIcon from "../components/AppIcon";
import {AppListItem,AppListItemSeparator} from "../components/lists";
import colors from "../config/colors";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";


const menuItems = [
  {
    title: "My Post",
    icon: {
      name: "typewriter",
      backgroundColor: "#FF7F50",
    },
  },
  {
    title: "My Message",
    icon: {
      name: "email",
      backgroundColor: colors.primaryGreen,
    },
  },
];

export default function AccountScreen() {
  return (
    <AppSafeAreaView style={styles.screen}>
      <View style={styles.containers}>
        <AppListItem
          title="Julia Guo"
          subTitle="juliaguo@gmail.com"
          image={require("../profile.jpeg")}
        />
      </View>
      <View style={styles.containers}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={AppListItemSeparator}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <AppListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    flex: 1,
  },
  containers: {
    marginVertical: 20,
  },
});
