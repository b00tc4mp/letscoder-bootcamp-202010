import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import DatesDetails from "./DatesDetails";
import DaysDetails from "./DaysDetails";

import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView } from "react-native";

export default function ListingDetailsScreen({
  checked,
  listingDetailsItem,
  onCloseProfile,
  refresh,
}) {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const image = listingDetailsItem.id;
  return (
    <View style={styles.backgroundColorListing}>
      <ScrollView>
        <ImageBackground
          style={styles.image}
          source={{
            uri: `http://192.168.0.11:4000/api/activity/${image}/images?refresh=${refresh}`,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={() => {
                {
                  onCloseProfile();
                }
              }}
            >
              <Icon style={styles.closeIcon} name="close" size={25} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <Text style={styles.titleListing}>{listingDetailsItem.title}</Text>
          <Text style={styles.checkedEquipment}>
            {listingDetailsItem.checked
              ? "EQUIPMENT REQUIRED"
              : "NO EQUIPMENT REQUIRED"}
          </Text>
          <Text style={styles.descriptionListing}>
            {listingDetailsItem.description}
          </Text>
          <Text style={styles.priceListing}>${listingDetailsItem.price}</Text>
          <DaysDetails />
          <DatesDetails />
        </View>
      </ScrollView>
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
  closeIcon: {
    marginTop: 30,
    marginLeft: 310,
    color: "white",
  },
  detailsContainer: {
    padding: 20,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#000000",
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
