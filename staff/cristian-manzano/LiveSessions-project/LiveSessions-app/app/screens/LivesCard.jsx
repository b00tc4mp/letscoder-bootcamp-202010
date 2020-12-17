import React from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";

export default function LivesCard({ title, liveDate, duration, status, payment, description }) {
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <View style={styles.livesCardHeader}>
          
          <TextInput style={styles.titleActivity}
          editable={false}>{title}</TextInput>
        </View>
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
    
    // flexDirection: "row"

  },

  livesCardHeader: {
    
  },

  titleActivity: {
    // marginTop: "-10%",
    // marginBottom: "10%",
    fontSize: 30,
    borderBottomWidth: 5,
    borderColor: "lightgray",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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


  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },

  livesButtons: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "gray",
    width: "25%",
    height: "45%"
  }
});