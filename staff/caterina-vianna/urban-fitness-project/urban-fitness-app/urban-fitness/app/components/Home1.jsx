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

export default function Home({ token }) {
  const [name, setName] = useState();
  const [view, setView] = useState();
  /*  const [toggleStatus, setToggleStatus] = useState("map"); // list */
  /* const [activities, setActivities] = useState([]); */

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

  /* useEffect(() => {
    // TODO: fetch activities and store in state
  }, []);
 */
  return (
    <View style={styles.backgroundDefault}>
      <View>
        {view === "profile" && <Profile onAvatar={handleChangeToEditProfile} />}
        {view === "edit-profile" && (
          <EditProfile onCloseProfile={handleChangeToProfile} />
        )}
        {/**
         * TODO:
         * 1. Fetch Activities (call('GET' urlActivities))
         * 2. Add Header component (Avatar, Search, ListToggle) <Header onSearchClick={} onProfileClick={} onListToggle={} toggleStatus={toggleStatus} />
         * 3. Add Map component and pass Activities prop <Map activities={activites} onActivityClick={handleActivityClick} />
         * 4. Add Activities carousel <ActivitiesCarousel activities={activites} activeActivity={activityId} onActivityClick={handleActivityClick} />
         */}
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
});
