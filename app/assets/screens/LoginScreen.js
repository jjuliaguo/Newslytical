import { StyleSheet, Text, View, Image } from "react-native";
import AppSafeAreaView from "../components/AppSafeAreaView";
import React from "react";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";

import AppSubmitButton from "../components/AppSubmitButton";
import AppForm from "../components/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
export default function LoginScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../icon.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
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
        <AppSubmitButton title="Login" />
      </AppForm>
    </AppSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //backgroundColor:"red"
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
