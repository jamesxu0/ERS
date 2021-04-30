import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Card from "./../components/Card";
import { Ionicons } from "@expo/vector-icons";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ALLCARDS = [
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
  const [playedCards, setPlayedCards] = useState([]);
  const [flip, setFlip] = useState(false);
  const [isUpperPlayerTurn, setIsUpperPlayerTurn] = useState(true);
  const [upperPlayerCards, setUpperPlayerCards] = useState([]);
  const [lowerPlayerCards, setLowerPlayerCards] = useState([]);
  const handleUpperPlayerPlayCard = () => {
    if (upperPlayerCards.length >= 1) {
      let deg = getRandomInt(40);
      if (flip) deg = deg * -1;
      setFlip(!flip);
      setPlayedCards([...playedCards, { type: upperPlayerCards[0], deg: deg }]);
      setUpperPlayerCards(upperPlayerCards.slice(1));
      setIsUpperPlayerTurn(false);
    }
  };
  const handleLowerPlayerPlayCard = () => {
    if (lowerPlayerCards.length >= 1) {
      let deg = getRandomInt(40);
      if (flip) deg = deg * -1;
      setFlip(!flip);
      setPlayedCards([...playedCards, { type: lowerPlayerCards[0], deg: deg }]);
      setLowerPlayerCards(lowerPlayerCards.slice(1));
      setIsUpperPlayerTurn(true);
    }
  };
  useEffect(() => {
    const shuffledCards = shuffle(ALLCARDS);
    setUpperPlayerCards(shuffledCards.slice(0, ALLCARDS.length / 2));
    setLowerPlayerCards(shuffledCards.slice(ALLCARDS.length / 2));
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {playedCards.map((card, idx) => {
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
      <TouchableOpacity
        style={styles.upperContainer}
        onPress={handleUpperPlayerPlayCard}
      >
        <Card type="BlueB" scale={100} style={styles.upperPlayer} />
        <Text>{upperPlayerCards.length} cards remaining</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.lowerContainer}
        onPress={handleLowerPlayerPlayCard}
      >
        {isUpperPlayerTurn ? (
          <Ionicons name="caret-up-sharp" size={32} color="black" />
        ) : (
          <Ionicons name="caret-down-sharp" size={32} color="black" />
        )}

        <Card type="GreenB" scale={100} style={styles.lowerPlayer} />
        <Text>{lowerPlayerCards.length} cards remaining</Text>
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
