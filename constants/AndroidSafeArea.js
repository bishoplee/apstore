import { StyleSheet, Platform, StatusBar } from "react-native";

const top = StatusBar.currentHeight + 6

export default StyleSheet.create({
  safe: {
    flex: 1,
    // backgroundColor: "rgba(58, 131, 244, 0.5)", // change this color to brand color
    // paddingTop: Platform.OS === "android" ? top : 0,
  }
});