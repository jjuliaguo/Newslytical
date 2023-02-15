import { StyleSheet, Text, View,Image } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import React from 'react'

export default function LoginScreen() {
  return (
    <AppSafeAreaView>
        <Image style={styles.logo} source={require("../icon.png")}/>
        <AppTextInput placeholder="User Name" icon="email"/>
        <AppTextInput placeholder="Password" icon="key"/>

  </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:50,
        marginBottom:20,


    }
})