import { StyleSheet, SafeAreaView,View,Platform, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

export default function AppSafeAreaView({children}) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen:{
        //paddingTop:Platform.OS ==="android" ? StatusBar.currentHeight:0
        paddingTop:Constants.statusBarHeight
        
    } 
})