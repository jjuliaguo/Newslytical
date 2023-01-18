import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'
//import Constants from "expo-constants"
//console.log(Constants)
export default function AppText({children, style}) {
  return (
    <View>
      <Text style={[styles.text,style]}>{children}</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        padding:10,
        fontFamily: Platform.OS==="android"?"Roboto":"Avenir",
    }


})