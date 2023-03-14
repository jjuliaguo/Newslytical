import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import AppErrorMessage from "./AppErrorMessage";
import { useFormikContext } from "formik";
export default function AppFormField({name, ...otherProps}) {
  const {handleChange , errors, setFieldTouched, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      {
        <AppErrorMessage
          error={errors[name]}
          visible={touched[name]}
        ></AppErrorMessage>
      }
    </>
  );
}

const styles = StyleSheet.create({});



/* sample

 <AppTextInput
              placeholder="User Name"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              icon="email"
              onBlur={()=>setFieldTouched("email")}

              onChangeText={handleChange("email")}
            />
            {<AppErrorMessage error={errors.email} visible={touched.email}></AppErrorMessage>}

*/