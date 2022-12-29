import { SafeAreaView, StyleSheet,Text} from 'react-native'
import React from 'react'
import WelcomeScreen from "./app/assets/screens/WelcomeScreen"
import AppButton from './app/assets/components/AppButton'

export default function App() {
  return (
   //<SafeAreaView><AppButton title="Login" onPress={()=>console.log("login btn pressed")}/></SafeAreaView>
   <WelcomeScreen/>

  )
}
