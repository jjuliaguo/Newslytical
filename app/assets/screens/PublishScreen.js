import { StyleSheet, Text, View, Image } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React from "react";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  AppSubmitButton,
} from "../components/forms";

//import AppFormDatePickerField from "../components/forms/AppFormDatePickerField";
import AppDatePicker from "../components/AppDatePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required()
    .min(3, "Too Short! At Least 3 characters!")
    .max(50, "Too Long! At Most 50 characters")
    .label("Title"),
  publishedDate: Yup.date().required(),
  category: Yup.object().required().nullable().label("Category"),
  article: Yup.string()
    .required()
    .min(1, "Too Short! At Least 1 character!")
    .max(1000, "Too Long! At Most 1000 characters")
    .label("Article"),
});
const categories = [
  { label: "Politics", value: 1 },
  { label: "Education", value: 2 },
  { label: "Activities & Travel", value: 3 },
  { label: "Sports & Entertainment", value: 4 },
  { label: "Environment", value: 5 },
];

export default function PublishScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          publishedDate: new Date(),
          category: null,
          article: "",
        }}
        onSubmit={(values) => {
         
          values.publishedDate=new Date();
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField placeholder="Title" autoCorrect={false} name="title" />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
        /> 
        <AppFormField
          multiline
          numberOfLines={10}
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
    backgroundColor: "yellow",
  },
});
