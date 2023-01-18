import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'
//AppListItem is for author and icon, it has title and subtitle
export default function AppListItem({title,subTitle,image, onPress, renderRightActions}) {
  return (
    <Swipeable renderRightActions={()=><View style={{backgroundColor:"red", width:70}}></View>}>
      <TouchableHighlight 
        underlayColor={colors.light}
        //onPress={()=>console.log("test")}
        onPress={onPress}
      >
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
            <View>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    padding:15
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