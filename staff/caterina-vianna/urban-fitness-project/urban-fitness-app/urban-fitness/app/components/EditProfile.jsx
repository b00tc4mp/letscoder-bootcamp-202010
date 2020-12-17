import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Avatar } from "react-native-paper";
import { LinearTextGradient } from "react-native-text-gradient";

import { AppLoading } from "expo";

import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";

export default function EditProfile({ onCloseProfile, onTrainMode }) {
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
      <View style={styles.containerProfile}>
        <View style={styles.underlineProfile}>
          <Text style={styles.profileText}>PROFILE</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.avatarImg} onPress={() => {}}>
            <Avatar.Image
              size={200}
              source={require("../assets/avatarEj.jpg")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.profileOptions}>BOOKINGS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.profileOptions}>EDIT PROFILE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onTrainMode();
            }}
          >
            <Text style={styles.profileOptions}>TRAINER MODE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.profileOptions}>HISTORY</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.profileLogOut}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    marginTop: 30,
    marginLeft: 310,
    color: "white",
  },
  containerProfile: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  profileText: {
    color: "white",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Nunito_900Black",
  },
  profileOptions: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
  },
  profileLogOut: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginTop: 100,
    fontFamily: "Nunito_600SemiBold",
  },
  /* underlineProfile: {
    borderBottomWidth: 3,
    width: 70,
    borderBottomColor: "white",
    textAlign: "center",
  }, */
  avatarImg: {
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
