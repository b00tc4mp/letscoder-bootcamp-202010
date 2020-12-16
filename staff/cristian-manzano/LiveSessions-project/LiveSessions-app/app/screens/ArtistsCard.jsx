import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function ArtistsCard({ artistName, tags, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleActivity}>{artistName}</Text>
        <Text style={styles.subTitleActivity}>{tags}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden",
    flexDirection: "row"
  },

  titleActivity: {
    color: "black",
    fontSize: 18,
    // fontFamily: Platform.OS === "ios" ? "Roboto" : "Avenir",
  },

  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "50%",
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