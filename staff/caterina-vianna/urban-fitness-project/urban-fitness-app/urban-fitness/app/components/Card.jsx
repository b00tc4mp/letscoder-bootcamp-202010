import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AppLoading } from "expo";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";

export default function Card({
  title,
  subTitle,
  image,
  location,
  dates,
  hour,
}) {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: `http://192.168.0.11:4000/api/activity/${image}/images`,
        }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleActivity}>{title}</Text>
        <Text style={styles.addressActivity}>Location: {location}</Text>
        <Text style={styles.addressActivity}>
          {dates}
          {hour}
        </Text>
        <Text style={styles.subTitleActivity}>{subTitle}</Text>
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
  },

  titleActivity: {
    color: "black",
    fontSize: 18,
    fontFamily: "Nunito_600SemiBold",
  },
  subTitleActivity: { fontFamily: "Nunito_600SemiBold" },
  addressActivity: {
    color: "grey",
    fontFamily: "Nunito_600SemiBold",
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
