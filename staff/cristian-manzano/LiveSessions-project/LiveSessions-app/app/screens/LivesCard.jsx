import React from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";

export default function LivesCard({ title, liveDate, duration, status, payment, description, image }) {
  return (
    <View style={styles.card}>

        <Image style={styles.image} source={image} />
        <View style={styles.livesCardHeader}>
        </View>
        <View style={styles.detailsContainer}>
                <Text style={styles.subTitleActivity}>Date: {liveDate}</Text>
        <Text style={styles.subTitleActivity}>Duration: {duration}</Text>
        <Text style={styles.subTitleActivity}>Payment: {payment}</Text>
        <Text style={styles.subTitleActivity}>{description}</Text>
        <Text style={styles.subTitleActivity}>Status: {status}</Text>
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