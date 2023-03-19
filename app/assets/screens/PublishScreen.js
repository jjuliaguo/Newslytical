import { StyleSheet, Text, View, Image } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React from "react";
import * as Yup from "yup";
import {AppForm, AppFormField, AppSubmitButton} from "../components/forms"
import AppDatePicker from "../components/AppDatePicker";

const validationSchema = Yup.object().shape({
  title:Yup.string().required()
                   .min(3, 'Too Short! At Least 3 characters!')
                   .max(50, 'Too Long! At Most 50 characters')
                   .label("Title"),

  article:Yup.string().required()
                   .min(1, 'Too Short! At Least 1 character!')
                   .max(1000, 'Too Long! At Most 1000 characters')
                   .label("Article"),


});
export default function PublishScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <AppForm
        initialValues={{title:"",date:"",}}
        onSubmit={(values) => {
          console.log("hey");
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Title"
          autoCorrect={false}
          name="title"
        />
        <AppDatePicker name="date"/>
  
        <AppFormField
          placeholder="Content"
          autoCorrect={false}
          name="article"
        /> 

        <AppSubmitButton title="Publish" />
      </AppForm>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"yellow"
  },

});
