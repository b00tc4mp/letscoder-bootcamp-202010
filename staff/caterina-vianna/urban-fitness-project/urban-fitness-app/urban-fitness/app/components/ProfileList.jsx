import React, { useState } from "react";

const {
  Surface,
  View,
  ActivityIndicatorBase,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} = require("react-native");
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { Avatar } = require("react-native-paper");
import MapView, { AnimatedRegion } from "react-native-maps";
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { AppLoading } from "expo";

export default function ProfileList({ onAvatar, onMapMode, onSearch }) {
  const [queryList, setQueryList] = useState("");
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View>
      <View style={styles.containerNavigation}>
        <TouchableOpacity onPress={() => onAvatar()}>
          <Avatar.Image size={50} source={require("../assets/avatarEj.jpg")} />
        </TouchableOpacity>
        <View style={styles.containerInputSearch}>
          <TextInput
            placeholder=" Search activity"
            style={styles.inputSearchActivity}
            onChangeText={(text) => setQueryList(text)}
          />
          <TouchableOpacity
            onPress={() => {
              onSearch(queryList);
            }}
          >
            <View style={styles.searchContainer}>
              <Image
                style={styles.searchIcon}
                source={require("../assets/search-icon.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              onMapMode();
            }}
          >
            <Image
              source={require("../assets/map_view.png")}
              style={styles.listIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNavigation: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    marginBottom: 20,
  },
  containerInputSearch: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputSearchActivity: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    height: 48,
    width: 150,
    paddingLeft: 20,
    fontFamily: "Nunito_600SemiBold",
  },
  searchContainer: {
    backgroundColor: "white",
    width: 50,
    height: 48,
    alignContent: "center",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
  },
  searchIcon: {
    width: 15,
    height: 15,
    alignContent: "center",
    marginTop: 15,
  },
  listIcon: {
    width: 48,
    height: 48,
  },
  containerMap: {
    alignItems: "center",
    justifyContent: "center",
  },
});
