import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";

export default function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/yoga.jpg")} />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleListing}>Yoga in the park</Text>
        <Text style={styles.priceListing}>Price: 20 euros</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  titleListing: {
    fontSize: 24,
    fontWeight: "500",
  },
  priceListing: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
