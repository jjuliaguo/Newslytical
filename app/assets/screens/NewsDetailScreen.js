import { StyleSheet, Text, ScrollView, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import AppListItem from "../components/lists/AppListItem";

export default function NewsDetailScreen({route}) {
  const post=route.params;
  return (
    <ScrollView style={styles.card}>
      <Image style={styles.image} source={post.image} />
      <AppListItem title="Josephen Roger" subTitle="Jan 08, 2022" />
      <AppText style={styles.title}>
        {post.title}
      </AppText>
      <AppText style={styles.description}>
        {post.postContent}
      </AppText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 7,
    color: "#091BCD",
    marginTop: 20,
    padding: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    padding:10,
  },
});
