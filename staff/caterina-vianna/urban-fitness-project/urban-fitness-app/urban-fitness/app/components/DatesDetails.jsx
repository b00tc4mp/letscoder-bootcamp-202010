import React from "react";
import { View, StyleSheet, Text } from "react-native";
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

export default function Dates({}) {
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.dates}>
      <View style={styles.datesContainer}>
        <View style={styles.dayMonthContainer}>
          <Text style={styles.dayActivity}>23</Text>
          <Text style={styles.monthActivity}>OCT</Text>
        </View>
        <View style={styles.hourActivityContainer}>
          <Text style={styles.hourActivity}>16-17h</Text>
        </View>
        <View style={styles.attendActivityContainer}>
          <Text style={styles.attendActivity}>Attend</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dates: { backgroundColor: "black" },
  datesContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 20,
    justifyContent: "center",
  },
  dayMonthContainer: {
    backgroundColor: "white",
    textAlign: "center",
  },
  hourActivityContainer: {
    width: 150,
  },
  attendActivityContainer: {
    textAlign: "center",
    backgroundColor: "white",
    textAlign: "center",
  },
  dayActivity: {
    fontSize: 40,
    fontFamily: "Nunito_600SemiBold",
    paddingTop: 5,
    paddingHorizontal: 15,
    backgroundColor: "white",
    margin: 0,
    borderTopLeftRadius: 20,
  },
  monthActivity: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    margin: 0,
    borderBottomLeftRadius: 20,
  },
  hourActivity: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  attendActivity: {
    fontSize: 20,
    fontFamily: "Nunito_600SemiBold",
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
