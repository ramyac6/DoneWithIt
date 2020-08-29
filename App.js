import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "orange" }}>
      <Button title="Click Me" onPress={() => console.log("Button pressed")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
