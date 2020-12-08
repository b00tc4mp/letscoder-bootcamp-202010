import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppText from "./AppText";

export default function Card() {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/yoga.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleActivity}>Yoga</Text>
        <Text style={styles.subTitleActivity}>Parc de la ciutadella</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },

  titleActivity: {
    color: "black",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },

  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: "green",
    fontWeight: "bold",
  },
});
