import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
export default function AppCard() {
  return (
    <View style={styles.card}>
        <Image style={styles.cardImg} source = {require("../new1.png")}/>
        <AppText style = {styles.cardTitle}>Mount Pleasant says goodbye to 'Oh Carolina' as hospitality group sets sights on South Vancouver</AppText>
        <AppText style = {styles.cardPreviewDescription}>Residents of Mount Pleasant are mourning the loss of a grocer-café that served the community some much needed optimism during the pandemic....</AppText>
      
    </View>
  )
}

const styles = StyleSheet.create({

    card:{
        backgroundColor:colors.white,
        borderRadius:15,
        margin:20,
        overflow:'hidden'
    },
    cardImg:{
        width:"100%",  
        height:150,    
    },
    cardTitle : {
        fontSize:20,
        fontWeight:"600",
        marginBottom:7,
        color:"#091BCD"

    },
    cardPreviewDescription: {
        fontSize:18,
        fontWeight:"400",
       
    },


})