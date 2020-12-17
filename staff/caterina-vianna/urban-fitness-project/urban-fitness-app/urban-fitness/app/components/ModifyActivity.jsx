import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { AppLoading } from "expo";

import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";

export default function ModifyActivity({
  title,
  subtitle,
  location,
  dates,
  hour,
}) {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.modifyActivityContainer}>
      <View style={styles.dates}>
        <View style={styles.descriptionContainer}>
          <Text style={{ fontFamily: "Nunito_600SemiBold" }}>{title}</Text>
          <Text style={{ fontFamily: "Nunito_600SemiBold" }}>{location}</Text>
          <Text style={{ fontFamily: "Nunito_600SemiBold" }}>{dates}</Text>
          <Text
            style={{
              fontFamily: "Nunito_600SemiBold",
            }}
          >
            {hour}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <LinearGradient
            colors={["#FF6161", "#FF61DC"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}
          >
            <View
              style={{
                width: 300,
                height: 30,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Nunito_700Bold",
                  marginTop: 2,
                  color: "white",
                }}
              >
                modify ✏
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modifyActivityContainer: {
    alignItems: "center",
    alignContent: "center",
    marginBottom: 20,
  },
  dates: {
    backgroundColor: "white",
    margin: 20,
    width: 300,
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textActivityContainer: {},
  descriptionContainer: {
    marginTop: 20,
    marginLeft: 20,
    fontFamily: "Nunito_600SemiBold",
  },
  datesContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent: "center",
  },
});
