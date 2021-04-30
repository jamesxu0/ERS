import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Settings({ route, navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Start Game"
        onPress={() => {
          route.params.mode === "SinglePlayer"
            ? navigation.navigate("SinglePlayer")
            : navigation.navigate("HeadToHead");
        }}
      />
    </View>
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
