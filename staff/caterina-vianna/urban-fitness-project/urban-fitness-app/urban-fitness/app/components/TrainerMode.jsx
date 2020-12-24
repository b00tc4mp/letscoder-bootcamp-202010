import { View, Text } from "react-native";
import React from "react";
import ModifyActivity from "./ModifyActivity";

import { AppLoading } from "expo";

import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TrainerMode({
  activities,
  onModifyActivityDetail,
  onCloseProfile,
  refresh,
}) {
  debugger;
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
      <View style={{ marginTop: 25, marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => {
            {
              onCloseProfile();
            }
          }}
        >
          <Icon
            style={{ marginTop: 20, marginLeft: 280, color: "black" }}
            name="close"
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10, marginBottom: 25 }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Nunito_900Black",
            color: "black",
          }}
        >
          Trainer Mode
        </Text>
      </View>
      <FlatList
        data={activities}
        keyExtractor={activities.id}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                onModifyActivityDetail({ activity: item });
              }}
            >
              <ModifyActivity
                title={item.title}
                subTitle={"$" + item.price}
                image={item._id}
                location={item.address}
                dates={item.selectedItems}
                hour={item.duration}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
