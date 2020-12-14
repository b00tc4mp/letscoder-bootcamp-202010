import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";

export default function ListingDetailsScreen({ checked, item }) {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const image = item.id;
  return (
    <View style={styles.backgroundColorListing}>
      <Image
        style={styles.image}
        source={`http://192.168.0.11:4000/api/activity/${image}/images`}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.titleListing}>{item.title}🧘‍♀️</Text>
        <Text style={styles.checkedEquipment}>
          {item.checked ? "EQUIPMENT REQUIRED" : "NO EQUIPMENT REQUIRED"}
        </Text>
        <Text style={styles.descriptionListing}>{item.description}</Text>
        <Text style={styles.priceListing}>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  checkedEquipment: {
    color: "grey",
    fontFamily: "Nunito_900Black",
    fontSize: 12,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  titleListing: {
    fontSize: 28,
    color: "white",
    fontFamily: "Nunito_700Bold",
  },
  descriptionListing: {
    color: "grey",
  },
  priceListing: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
