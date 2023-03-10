import {StyleSheet, TouchableWithoutFeedback, View, FlatList, Button, Modal } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import React, {useState} from 'react'

import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from "./AppText"
import AppSafeAreaView from './AppSafeAreaView'
import AppPickerItem from "./AppPickerItem"

export default function AppPicker({icon,placeholder,items,onSelectItem ,selectedItem}) {
  const [modelVisible, setModalVisiable]=useState(false)
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>setModalVisiable(true)}>
    <View style ={styles.container}>
      {icon && (<MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>)}  
      <AppText style={styles.text}>
         {selectedItem ? selectedItem : placeholder}
      </AppText>
      <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium} />
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modelVisible} animationType="slide">
      <AppSafeAreaView>
        <Button title='Close' onPress={()=>setModalVisiable(false)}/>
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({item})=>(
            <AppPickerItem 
              label={item.label} 
              onPress={
                ()=>{
                  setModalVisiable(false)
                  onSelectItem(item.label)
                }}/>
              )}
        />
      </AppSafeAreaView>
    </Modal>
     
    </>
  )
}

const styles = StyleSheet.create({
  container:{
     backgroundColor:colors.light,
     borderRadius:25,
     flexDirection:"row",
     width:"100%",
     padding:15,
     marginVertical:10,
     
  },
  icon:{
    marginRight:10,
  
  },

  text:{
    flex:1,
  },

})