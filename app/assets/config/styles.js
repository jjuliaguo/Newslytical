import { StyleSheet, Text, View, Platform } from "react-native";
import colors from "./colors";

export default {
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
