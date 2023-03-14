import { StyleSheet, Text, View,Image } from 'react-native'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppTextInput from '../components/AppTextInput'
import React from 'react'
import AppButton from '../components/AppButton'

export default function RegisterScreen() {
  return (
    <AppSafeAreaView>
        <Image style={styles.logo} source={require("../icon.png")}/>
         <AppTextInput placeholder="First Name" 
          autoCorrect={false} 
          />
          <AppTextInput placeholder="Last Name" 
          autoCorrect={false} 
          />
          <AppTextInput placeholder="User Name" 
          autoCapitalize="none" 
          autoCorrect={false} 
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"/>
        <AppTextInput 
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          placeholder="Password" 
          icon="key"/>
          <AppTextInput 
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          placeholder="Re-type Password" 
          icon="key"/>
          <AppButton title="Register" onPress={()=>console.log("Register!!!")}></AppButton>
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