import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title={"Single Player"}
        onPress={() => {
          navigation.navigate("Settings", { mode: "SinglePlayer" });
        }}
      />
      <Button
        title={"Head To Head"}
        onPress={() => {
          navigation.navigate("Settings", { mode: "HeadToHead" });
        }}
        style={styles.test}
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
