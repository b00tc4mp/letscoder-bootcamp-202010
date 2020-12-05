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

import React from "react";

export default function Profile({ onAvatar }) {
  return (
    <View style={styles.containerNavigation}>
      <TouchableOpacity onPress={() => onAvatar()}>
        <Avatar.Image size={70} source={require("../assets/avatar-app2.png")} />
      </TouchableOpacity>
      <TextInput
        placeholder=" Search activity"
        style={styles.inputSearchActivity}
        onChangeText={() => {}}
      />

      <View>
        <TouchableOpacity>
          <Image
            source={require("../assets/icon_list_app.png")}
            style={styles.listIcon}
          />
        </TouchableOpacity>
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
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  inputSearchActivity: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 60,
    height: "8%",
    width: "55%",
    borderRadius: 40,
  },
  listIcon: {
    width: 50,
    height: 50,
  },
});
