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

import React from "react";

export default function Profile({ onAvatar, onMapMode }) {
  return (
    <View>
      <View style={styles.containerNavigation}>
        <TouchableOpacity onPress={() => onAvatar()}>
          <Avatar.Image size={50} source={require("../assets/avatarEj.jpg")} />
        </TouchableOpacity>
        <TextInput
          placeholder=" Search activity"
          style={styles.inputSearchActivity}
          onChangeText={() => {}}
        />
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
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "black",
    marginBottom: 20,
  },
  inputSearchActivity: {
    backgroundColor: "white",
    margin: 0,
    paddingHorizontal: 60,
    borderRadius: 40,
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
