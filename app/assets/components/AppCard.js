import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'
export default function AppCard({title,subtitle,image}) {
  return (
    <View style={styles.card}>
        <Image style={styles.cardImg} source = {image}/>
        <AppText style = {styles.cardTitle}>{title}</AppText>
        <AppText style = {styles.cardPreviewDescription}>{subtitle} </AppText>
      
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
        color:"#091BCD",
    

    },
    cardPreviewDescription: {
        fontSize:18,
        fontWeight:"400",
    
       
    },


})