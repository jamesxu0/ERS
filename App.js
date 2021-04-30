import React from "react";
import { Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import SinglePlayer from "./screens/SinglePlayer";
import HeadToHead from "./screens/HeadToHead";
import MainContext from "./contexts/MainContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <MainContext.Provider value={{}}>
      <MainStack />
    </MainContext.Provider>
  );
}

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: "Home Page" }}
          component={Home}
        />
        <Stack.Screen
          name="Settings"
          options={{ title: "Settings Page" }}
          component={Settings}
        />
        <Stack.Screen
          name="SinglePlayer"
          options={{ title: "Single Player Page" }}
          component={SinglePlayer}
        />
        <Stack.Screen
          name="HeadToHead"
          options={{ title: "Head to Head Page" }}
          component={HeadToHead}
          options={({ navigation }) => ({
            headerLeft: () => null,
            headerRight: () => (
              <Button
                title="End Game"
                onPress={() => {
                  Alert.alert(
                    "End Game",
                    "Are you sure you want to end the game?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel",
                      },
                      {
                        text: "OK",
                        onPress: () => {
                          navigation.navigate("Home");
                        },
                      },
                    ]
                  );
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
