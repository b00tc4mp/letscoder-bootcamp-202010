import React from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";

export default function LivesCard({ title, liveDate, duration, status, payment, description, image }) {
  return (
    <View style={styles.card}>

      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.livesCardHeader}>
      </View>
      <View style={styles.detailsContainer}>
        <View style={{margin: 15}}>
          <Text style={styles.titleActivity}>{title}</Text>
          <Text style={styles.subTitleActivity}>Date: {liveDate}</Text>
          <Text style={styles.subTitleActivity}>Duration: {duration}</Text>
          <Text style={styles.subTitleActivity}>Payment: {payment + '$'}</Text>

          <Text style={styles.subTitleActivity}>Status: {status}</Text>
        </View>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    // backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "white",
    
  },

  titleActivity: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto_Regular400",
    // fontFamily: Platform.OS === "ios" ? "Roboto" : "Avenir",
  },

  detailsContainer: {
    // padding: 20,
    marginRight: 150
  },
  image: {
    width: "50%",
    height: 200,
  },


  subTitleActivity: {
    // color: "green",
    // fontWeight: "bold",
    fontFamily: "Roboto-Light",
    marginRight: 20,
    marginTop: 10
  },
});