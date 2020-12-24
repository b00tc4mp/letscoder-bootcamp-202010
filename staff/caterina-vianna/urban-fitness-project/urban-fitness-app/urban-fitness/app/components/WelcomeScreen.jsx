import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome-screen.jpg")}
    >
      <Text style={styles.logoText}>Urban Fitness</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logoText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default WelcomeScreen;
