import React, {
  useEffect,
  TouchableOpacity,
  useReducer,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
} from "react-native";
import { retrieveUser } from "../logic";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Card from "./Card";
import ProfileList from "./ProfileList";
import CreateActivity from "./CreateActivity";
import Constants from "expo-constants";
import MapContainer from "./MapContainer";

export default function Home({ token }) {
  const [name, setName] = useState();
  const [view, setView] = useState();

  useEffect((token) => {
    AsyncStorage.getItem("token").then((token) => {
      try {
        retrieveUser(token, (error, user) => {
          if (error) return Alert.alert(error.message);
          debugger;
          const { firstName } = user;
          setName(firstName);
          setView("profile");
        });
      } catch (error) {
        Alert.alert(error.message);
      }
    });
  }, []);

  const handleChangeToEditProfile = () => {
    setView("edit-profile");
  };

  const handleChangeToProfile = () => {
    setView("profile");
  };

  const handleListMode = () => {
    setView("list-mode");
  };

  const handleMapMode = () => {
    setView("map-mode");
  };

  const handleChangeToTrainerMode = () => {
    setView("trainer-mode");
  };

  return (
    <View style={styles.backgroundDefault}>
      <View>
        {view === "profile" && (
          <Profile
            onAvatar={handleChangeToEditProfile}
            onListMode={handleListMode}
          />
        )}
        {view === "edit-profile" && (
          <EditProfile
            onCloseProfile={handleChangeToProfile}
            onTrainerMode={handleChangeToTrainerMode}
          />
        )}
        {view === "list-mode" && (
          <>
            <ProfileList
              onMapMode={handleMapMode}
              onAvatar={handleChangeToEditProfile}
            />
            <View
              style={{
                backgroundColor: "#f8f4f4",
                padding: 20,
                paddingTop: 100,
              }}
            >
              <Card />
            </View>
          </>
        )}

        {view === "map-mode" && (
          <Profile
            onAvatar={handleChangeToEditProfile}
            onListMode={handleListMode}
          />
        )}
        {view === "trainer-mode" && (
          <View style={styles.container}>
            <MapContainer />
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textToken: {
    color: "pink",
  },
  customBtnText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
  },

  /* Here, style the background of your button */
  customBtnBG: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    marginRight: 60,
    marginLeft: 60,
    marginTop: 60,
  },
  backgroundDefault: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
