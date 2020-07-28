import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SignInPage from "./app/screens/SignInPage";

import InitialLanguageSelection from "./app/screens/InitialLanguageSelection";

import AppUserRoleSelection from "./app/screens/AppUserRoleSelection";
export default function App() {
  return (
    <AppUserRoleSelection />
    /*
    <View style={styles.container}>
      <Text>Hi,This is OpenJobApp Team.</Text>
      <StatusBar style="auto" />
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
