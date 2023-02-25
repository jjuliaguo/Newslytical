//lisings Screen
import { FlatList, StyleSheet } from "react-native";
import React from "react";
import AppSafeAreaView from "../components/AppSafeAreaView";
import AppCard from "../components/AppCard";
import { TextInput } from "react-native-gesture-handler";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Last day due for submmit your tax file",
    previewPost: "2023 Feb 21",
    image: require("../new1.png"),
  },
  {
    id: 2,
    title: "New Covid-19 Support is released!",
    previewPost: "2023 Jan 11",
    image: require("../new1.png"),
  },
  {
    id:3,
    title: "Mount Pleasant says goodbye to 'Oh Carolina' as hospitality group sets sights on South Vancouver",
    previewPost: "Residents of Mount Pleasant are mourning the loss of a grocer-café that served the community some much needed optimism during the pandemic...",
    image: require("../new1.png"),
  }
];
export default function MyPostsScreen(props) {
  return (
    <AppSafeAreaView style={styles.screen}>
       <FlatList 
          data={listings}
          keyExtractor={listing => listing.id.toString()}
          renderItem={({item})=>
            <AppCard
                title={item.title}
                subtitle={item.previewPost}
                image={item.image}
            />    
          }
       />
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
    screen:{
        //padding:20,
        backgroundColor:colors.light
    }
});
