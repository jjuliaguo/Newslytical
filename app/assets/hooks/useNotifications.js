import { useEffect } from "react";
import {Notifications} from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../../api/expoPushTokens";


export default useNotifications=(notificationListener)=>{
    useEffect(()=>{
        registerForPushNotification();
        if (notificationListener)
          Notifications.addPushTokenListener(notification => {
          navigation.navigate('Account');
          
        });
    
      },[]);
      const registerForPushNotification = async () => {
        try {
          const permission = Permissions.askAsync(Permissions.NOTIFICATIONS);
          if (!permission.granted) return;
          
          const token = await Notifications.getExpoPushTokenAsync();
          expoPushTokensApi.register(token);
          console.log(token);
        } catch (error) {
          console.log('Error getting a push token', error)
        }
      };
}