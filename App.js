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
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My Title", "My Message", [
            { text: "yes" },
            { text: "No" },
          ])
        }
      />
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
