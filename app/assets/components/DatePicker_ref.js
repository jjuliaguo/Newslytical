// this is reference for date picker, which is the original date picker that is not use in app




import { StyleSheet, Text, View,Button,Modal } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import React, {useState} from 'react';

export default function DatePicker_ref() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(true);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(true);
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      if (Platform.OS === 'android') {
        setShow(false);
        // for iOS, add a button that closes the picker
      }
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
        <Button onPress={showTimepicker} title="Show time picker!" />
        <Text>selected: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    );
}

const styles = StyleSheet.create({})