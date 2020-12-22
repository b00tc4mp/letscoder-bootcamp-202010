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
  Dimensions,
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
import ModifyActivity from "./ModifyActivity";
import TrainerMode from "./TrainerMode";
import AddActivityButton from "./AddActivityButton";
import modifyActivity from "../logic/modify-activity";
import ModifyActivityDetail from "./ModifyActivityDetail";
import retrieveActivityOwner from "../logic/retrieve-activity-owner";

export default function Home({ token, handleLogOut }) {
  const [name, setName] = useState();
  const [view, setView] = useState();
  const [activities, setActivities] = useState([]);
  const [results, setResults] = useState([]);
  const [item, setItem] = useState();
  const [activityId, setActivityId] = useState();
  const [activity, setActivity] = useState();
  const [activitiesModified, setActivitiesModified] = useState();
  const [listingDetailsItem, setListingDetailsItem] = useState();

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
          setActivities(activities);
        });
      } catch (error) {
        alert(error.message);
      }
      try {
        retrieveActivityOwner(token, (error, activitiesModified) => {
          debugger;
          if (error) return alert(error.message);
          setActivitiesModified(activitiesModified);
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
    selectedItems,
    duration,
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
          selectedItems,
          duration,
          (error, activityId) => {
            if (error) return alert(error.message);
            try {
              saveActivityImage(activityId, imageUri, (error) => {
                if (error) return alert(error.message);
                try {
                  retrieveActivity(token, (error, activities) => {
                    if (error) return alert(error.message);
                    debugger;
                    setActivities(activities);
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

  const handleChangeToListingDetails = ({ listingDetailsItem }) => {
    setListingDetailsItem(listingDetailsItem);
    setView("listing-details");
  };

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

  const handleChangeToListingDetailsResult = ({ listingDetailsItem }) => {
    setListingDetailsItem(listingDetailsItem);
    setView("listing-details");
  };

  const handleChangeToTrainerProfile = () => {
    setView("trainer-profile");
  };

  const handleChangeToCreateActivity = () => {
    setView("create-activity");
  };

  const handleModifyActivity = ({
    activityId,
    imageUri,
    title,
    description,
    price,
    checked,
    address,
    sport,
    repeat,
    spots,
    selectedItems,
    duration,
  }) => {
    try {
      saveActivityImage(activityId, imageUri, (error) => {
        if (error) return alert(error.message);

        try {
          modifyActivity(
            activityId,
            title,
            description,
            price,
            checked,
            address,
            sport,
            repeat,
            spots,
            selectedItems,
            duration,
            (error) => {
              if (error) return Alert.alert(error.message);
              AsyncStorage.getItem("token").then((token) => {
                try {
                  debugger;
                  retrieveActivityOwner(token, (error, activitiesModified) => {
                    if (error) return alert(error.message);
                    setActivitiesModified(activitiesModified);

                    setView("trainer-profile");
                  });
                } catch (error) {
                  alert(error.message);
                }
              });
            }
          );
        } catch (error) {
          Alert.alert(error.message);
        }
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleGoToModifyActivity = ({ activity }) => {
    setActivity(activity);
    setView("modify-activity-detail");
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
            onTrainMode={handleChangeToTrainerProfile}
            onLogOut={handleLogOut}
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
        {view === "trainer-profile" && (
          <View
            style={{
              backgroundColor: "#f8f4f4",
              paddingHorizontal: 20,
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}
          >
            <TrainerMode
              activities={activitiesModified}
              onModifyActivityDetail={handleGoToModifyActivity}
              onCloseProfile={handleChangeToEditProfile}
            />
            <AddActivityButton
              onCreateActivity={handleChangeToCreateActivity}
            />
          </View>
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
              <ResultsList
                results={results}
                onListingDetails={handleChangeToListingDetailsResult}
              />
            </View>
          </>
        )}

        {view === "listing-details" && (
          <View>
            <ListingDetailsScreen
              listingDetailsItem={listingDetailsItem}
              onCloseProfile={handleListMode}
            />
          </View>
        )}

        {view === "create-activity" && (
          <CreateActivity
            onSubmitActivity={handleSubmitActivity}
            onCloseProfile={handleChangeToEditProfile}
          />
        )}

        {view === "modify-activity-detail" && (
          <ModifyActivityDetail
            activity={activity}
            onModifyActivity={handleModifyActivity}
            onCloseProfile={handleChangeToTrainerProfile}
          />
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
