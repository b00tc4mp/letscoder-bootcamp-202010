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

export default function Profile({ onAvatar }) {
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
          <TouchableOpacity>
            <Image
              source={require("../assets/icon_list_app.png")}
              style={styles.listIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerMap}>
        <MapView
          style={styles.mapStyle}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={generatedMapStyle}
        />
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
    backgroundColor: "grey",
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
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const generatedMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];
