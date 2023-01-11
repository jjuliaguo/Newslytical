import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import AppListItem from '../components/AppListItem'

export default function NewsDetailScreen() {
  return (
    <View style={styles.card}>
        <Image style={styles.image} source = {require("../new1.png")}/>
        <AppListItem title="Josephen Roger" subTitle="Jan 08, 2022"/>
        <AppText style = {styles.title}>Mount Pleasant says goodbye to 'Oh Carolina' as hospitality group sets sights on South Vancouver</AppText>
        <AppText style = {styles.description}>On Sunday, the owners of Oh Carolina gave one week’s notice that the business is closing its doors, which opened at the intersection of Carolina and 12th streets in 2021.
“Our time together is drawing to a close,” reads the Instagram post. “Thank you for helping us to support local independent food producers, and celebrate incredible chefs and winemakers at our beautiful summer pop-up events.” One of four partners that make up Gooseneck Hospitality, the group that operates Oh Carolina, says the project is being passed along to friends who know the grocer-café model better.
“It was great, but it’s not our forte—we’re restaurant people,” Iranzad explained to CTV news. “For us to be able to do something really creative and thoughtful in the middle of the pandemic was exciting. We thought it could serve as a bit of optimism for our industry which was obviously one of the hardest hit.”
Oh Carolina emerged as a community staple by working exclusively with local suppliers to showcase Vancouver-made goods. The café also hosted garden parties every Sunday in the summer, weather permitting, which would be catered by local chefs.
“You’d have 100 people sitting outside, enjoying each other’s company. To bring the community together like that, it was really magical,” Iranzad recalled.
Gooseneck Hospitality operates two restaurants by the name of Bells and Whistles, two pizzerias dubbed Buffala, and the Mexican eatery Lucky Taco. The five staff that worked at Oh Carolina have accepted jobs at those locations.
Next, Gooseneck Hospitality is opening a new Bufala and Lucky Taco in South Vancouver’s River District.
“The beautiful thing about River District is that it was nothing other than a swamp, really, and it’s been totally repurposed into this lovely aspirational neighbourhood,” said Iranzad. “Now we get to go into a livelier neighbourhood where you’ve got people who can actually afford to buy their first homes in Vancouver.”
When asked what he would miss the most about Oh Carolina, Iranzad said “the dogs are great. Being as close as we were to Robson Park meant we got a lot of visitors.”
He says there are no big goodbye plans, other than enjoying the rest of the week.
“It’s not necessarily a ‘the sky is falling’ thing,” Iranzad said, adding the new operators could resume business as early as this spring. </AppText>
  
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
        marginBottom:40,
    },
    title:{
      fontSize:20,
      fontWeight:"600",
      marginBottom:7,
      color:"#091BCD",
      marginTop:20,
    },
    description:{
      fontSize:18,
      fontWeight:"400",
    }

})