import { StyleSheet, FlatList, View} from 'react-native'
import React from 'react'
import AppListItem from '../components/AppListItem'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppListItemSeparator from '../components/AppListItemSeparator'
import colors from '../config/colors'
//import { StatusBar } from 'expo-status-bar'


const messages = [
    {
        id:1,
        title:"T1",
        description:"D1",
        image: require("../p1.jpg")
    },
    {
        id:2,
        title:"T2",
        description:"D2",
        image: require("../profile.jpeg")
    },
    {
        id:3,
        title:"T3",
        description:"D3",
        image: require("../p1.jpg")
    }

]


export default function MessageScreen() {
  return (
    <AppSafeAreaView>
      <FlatList 
        data={messages}
        keyExtractor={m=>m.id.toString()}
        renderItem={({item}) => <AppListItem 
                                  title={item.title} 
                                  subTitle={item.description} 
                                  image={item.image} 
                                  onPress={()=>console.log("Message --", item)}/>
                                  
        }
        ItemSeparatorComponent={()=><AppListItemSeparator style={{backgroundColor:colors.light}}/>}
        
        ></FlatList>
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({

})