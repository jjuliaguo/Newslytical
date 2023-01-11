import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
export default function AppListItem({title,subTitle,image}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../profile.jpeg")}/>
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row"
  },
  image:{
    width:70,
    height:70,
    borderRadius:35,
    marginRight:10
  },
  title:{
    padding:2.5,
    fontWeight:"500"
  },
  subTitle:{
    padding:2.5,
    paddingTop:0,
    color: colors.medium
  },

})