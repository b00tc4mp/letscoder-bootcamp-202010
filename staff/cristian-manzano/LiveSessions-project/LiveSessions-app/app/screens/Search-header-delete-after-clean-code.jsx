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
  import Icon from "react-native-vector-icons";
  const { Avatar } = require("react-native-paper");
  import MapView, { AnimatedRegion, Marker } from "react-native-maps";
  
  import React, { useState } from "react";
  
  export default function Profile({ onAvatar, onListMode, onSearch }) {
    const [query, setQuery] = useState("");
  
    const initialRegion = {
      latitude: 41.390205,
      longitude: 2.154007,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    };
    var markers = [
      {
        latitude: 41.4,
        longitude: 2.15,
        title: "Foo Place",
        subtitle: "1234 Foo Drive",
      },
    ];
  
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
              onChangeText={(text) => {
                setQuery(text);
                debugger;
              }}
            />
            <TouchableOpacity
              onPress={() => {
                debugger;
                onSearch(query);
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
                onListMode();
              }}
            >
              <Image
                source={require("../assets/icon_list_app.png")}
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
    },
    listIcon: {
      width: 48,
      height: 48,
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
  });