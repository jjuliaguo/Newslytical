import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PublishTabButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.summitButtonColor,
    borderColor: 'rgba(34,36,40,1)',
    borderWidth: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    justifyContent: "center",
  },
});
