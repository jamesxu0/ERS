import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "./../components/Card";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const TestCards = [
  "AceH",
  "AceD",
  "AceC",
  "AceS",
  "TwoH",
  "TwoD",
  "TwoC",
  "TwoS",
  "ThreeH",
  "ThreeD",
  "ThreeC",
  "ThreeS",
  "FourH",
  "FourD",
  "FourC",
  "FourS",
  "FiveH",
  "FiveD",
  "FiveC",
  "FiveS",
  "SixH",
  "SixD",
  "SixC",
  "SixS",
  "SevenH",
  "SevenD",
  "SevenC",
  "SevenS",
  "EightH",
  "EightD",
  "EightC",
  "EightS",
  "NineH",
  "NineD",
  "NineC",
  "NineS",
  "TenH",
  "TenD",
  "TenC",
  "TenS",
  "JackH",
  "JackD",
  "JackC",
  "JackS",
  "QueenH",
  "QueenD",
  "QueenC",
  "QueenS",
  "KingH",
  "KingD",
  "KingC",
  "KingS",
];

export default function HeadToHead() {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(false);
  const playCard = () => {
    let deg = getRandomInt(40);
    if (flip) deg = deg * -1;
    setFlip(!flip);
    setCards([
      ...cards,
      { type: TestCards[getRandomInt(TestCards.length)], deg: deg },
    ]);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {cards.map((card, idx) => {
        return (
          <Card
            key={card + idx}
            type={card.type}
            scale={150}
            style={styles.centerCard}
            rotate={card.deg}
          />
        );
      })}
      <TouchableOpacity style={styles.upperContainer} onPress={playCard}>
        <Card type="BlueB" scale={100} style={styles.upperPlayer} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.lowerContainer} onPress={playCard}>
        <Card type="GreenB" scale={100} style={styles.lowerPlayer} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  upperContainer: {
    flex: 1,
    height: "50%",
    width: "100%",
    backgroundColor: "lightgray",
  },
  lowerContainer: {
    flex: 1,
    height: "50%",
    width: "100%",
    backgroundColor: "lightgray",
  },
  upperPlayer: {
    position: "absolute",
    left: "42%",
    top: 0,
  },
  lowerPlayer: {
    position: "absolute",
    left: "42%",
    bottom: 0,
  },
  centerCard: {
    position: "absolute",
    top: "40%",
    bottom: 0,
    zIndex: 1,
    alignSelf: "center",
  },
});
