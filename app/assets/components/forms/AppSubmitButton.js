import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

export default function AppSubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      style={[style, styles.button]}
      title={title}
      onPress={handleSubmit}
      bgColor="summitButtonColor"
    ></AppButton>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
   
  },
});
