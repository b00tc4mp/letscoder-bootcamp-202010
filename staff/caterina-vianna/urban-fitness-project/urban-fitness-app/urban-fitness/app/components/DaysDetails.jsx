import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
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

export default function DaysDetails(props) {
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
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToAlignment={"center"}
      >
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["#FF6161", "#FF61DC"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text style={styles.day}>1</Text>
            <Text style={styles.weekday}>mon</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["white", "white"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                marginTop: 8,
                fontSize: 24,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              2
            </Text>
            <Text style={{ fontSize: 15, color: "black" }}>tue</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["white", "white"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                marginTop: 8,
                fontSize: 24,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              3
            </Text>
            <Text style={{ fontSize: 15, color: "black" }}>wed</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["white", "white"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                marginTop: 8,
                fontSize: 24,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              4
            </Text>
            <Text style={{ fontSize: 15, color: "black" }}>thr</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["white", "white"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                marginTop: 8,
                fontSize: 24,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              5
            </Text>
            <Text style={{ fontSize: 15, color: "black" }}>fri</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["white", "white"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                marginTop: 8,
                fontSize: 24,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              6
            </Text>
            <Text style={{ fontSize: 15, color: "black" }}>sat</Text>
          </LinearGradient>
        </View>
        <View style={styles.containerDay}>
          <LinearGradient
            colors={["white", "white"]}
            style={{
              height: 70,
              width: 70,
              alignItems: "center",
              textAlignVertical: "center",
              borderRadius: 10,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                marginTop: 8,
                fontSize: 24,
                fontFamily: "Nunito_600SemiBold",
              }}
            >
              7
            </Text>
            <Text style={{ fontSize: 15, color: "black" }}>sun</Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDay: {
    height: 70,
    width: 70,
    alignItems: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    marginBottom: 35,
    marginLeft: 0,
    marginRight: 10,
  },
  day: {
    marginTop: 8,
    fontSize: 24,
    color: "white",
    fontFamily: "Nunito_600SemiBold",
  },
  weekday: {
    fontSize: 15,
    color: "white",
  },
});
