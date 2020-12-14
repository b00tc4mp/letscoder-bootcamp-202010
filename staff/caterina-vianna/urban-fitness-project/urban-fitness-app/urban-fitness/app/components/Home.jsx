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
import ListingDetailsScreen from "./ListingDetailsScreen";
import Listing from "./Listing";
import DatesDetails from "./DatesDetails";
import ResultsList from "./ResultsList";
import saveActivity from "../logic/save-activity";
import retrieveActivity from "../logic/retrieve-activity";
import searchByActivity from "../logic/search-by-activity";
import saveActivityImage from "../logic/save-activity-image";

export default function Home({ token }) {
  const [name, setName] = useState();
  const [view, setView] = useState();
  const [activities, setActivity] = useState([]);
  const [results, setResults] = useState([]);
  const [item, setItem] = useState();
  const [activityId, setActivityId] = useState();

  useEffect((token) => {
    AsyncStorage.getItem("token").then((token) => {
      try {
        retrieveUser(token, (error, user) => {
          if (error) return Alert.alert(error.message);
          const { firstName } = user;
          setName(firstName);
          setView("profile");
        });
      } catch (error) {
        Alert.alert(error.message);
      }
      try {
        retrieveActivity(token, (error, activities) => {
          debugger;
          if (error) return alert(error.message);
          setActivity(activities);
        });
      } catch (error) {
        alert(error.message);
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

  const handleChangeToTrainerMode = () => {
    setView("trainer-mode");
  };

  const handleSubmitActivity = ({
    imageUri,
    title,
    description,
    price,
    checked,
    address,
    sport,
    repeat,
    spots,
    activityDate,
  }) => {
    debugger;
    try {
      AsyncStorage.getItem("token").then((token) => {
        saveActivity(
          token,
          undefined,
          title,
          description,
          price,
          checked,
          address,
          sport,
          repeat,
          spots,
          activityDate,
          (error, activityId) => {
            if (error) return alert(error.message);
            try {
              saveActivityImage(activityId, imageUri, (error) => {
                if (error) return alert(error.message);

                try {
                  retrieveActivity(token, (error, activities) => {
                    if (error) return alert(error.message);

                    setActivity(activities);
                    setView("list-mode");
                  });
                } catch (error) {
                  alert(error.message);
                }
              });
            } catch (error) {
              alert(error.message);
            }
          }
        );
      });
    } catch (error) {
      alert(error.message);
    }
  };
  /* const handleListingDetailsScreen = () => {
    setView("listing-detail");
  }; */

  const handleSearch = (query) => {
    console.log(query);
    debugger;
    try {
      AsyncStorage.getItem("token").then((token) => {
        debugger;
        searchByActivity(token, query, (error, results) => {
          debugger;
          console.log(results);
          if (error) return alert(error.message);
          setResults(results);
          setView("results");
        });
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChangeToListingDetails = ({ item }) => {
    setItem(item);
    setView("listing-details");
  };

  return (
    <View style={styles.backgroundDefault}>
      <View>
        {view === "profile" && (
          <Profile
            onAvatar={handleChangeToEditProfile}
            onListMode={handleListMode}
            onSearch={handleSearch}
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
              onMapMode={handleChangeToProfile}
              onAvatar={handleChangeToEditProfile}
              onSearch={handleSearch}
            />
            <View
              style={{
                backgroundColor: "#f8f4f4",
                paddingHorizontal: 20,
              }}
            >
              <Listing
                activities={activities}
                onListingDetails={handleChangeToListingDetails}
              />
            </View>
          </>
        )}
        {view === "results" && (
          <>
            <ProfileList
              onMapMode={handleChangeToProfile}
              onAvatar={handleChangeToEditProfile}
              onSearch={handleSearch}
            />
            <View
              style={{
                backgroundColor: "#f8f4f4",
                paddingHorizontal: 20,
              }}
            >
              <ResultsList results={results} />
            </View>
          </>
        )}

        {view === "listing-details" && (
          <View>
            <ListingDetailsScreen item={item} />
          </View>
        )}

        {view === "trainer-mode" && (
          <CreateActivity onSubmitActivity={handleSubmitActivity} />
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
});
