import { StyleSheet, Text, View, Image } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React from "react";
import * as Yup from "yup";
import {AppForm, AppFormField, AppSubmitButton} from "../components/forms"

const validationSchema = Yup.object().shape({
  name:Yup.string().required()
                   .min(3, 'Too Short! At Least 3 characters!')
                   .max(50, 'Too Long! At Most 50 characters')
                   .label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
export default function RegisterScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <AppForm
        initialValues={{ name:"", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          autoCorrect={false}
          icon="account"
          name="name"
        />
        <AppFormField
          placeholder="User Name"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          icon="email"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          secureTextEntry
          placeholder="Password"
          icon="key"
          name="password"
        />
        <AppSubmitButton title="Register" />
      </AppForm>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor:"white"
  },

});
