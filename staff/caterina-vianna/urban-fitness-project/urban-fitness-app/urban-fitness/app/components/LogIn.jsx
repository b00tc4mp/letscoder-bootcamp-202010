import React, { useState } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { MaterialComunityIcons } from "@expo/vector-icons";
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
import { AppLoading } from "expo";

export default function LogIn({ changeToSignUp, onLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.containerSignUp}>
      {/* {icon && <MaterialComunityIcons name={icon} size={20} />} */}
      <View>
        <Image
          source={require("../assets/logo-urban-fitness-app-2.png")}
          style={{
            width: null,
            resizeMode: "contain",
            height: 150,
            marginTop: 60,
            marginBottom: 50,
          }}
        />
      </View>
      <View style={styles.signContainer}>
        <View>
          <TouchableOpacity onPress={() => changeToSignUp()}>
            <Text style={styles.signUp}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.underlineLogIn}>
          <Text style={styles.logIn}>LOG IN</Text>
        </View>
      </View>
      <TextInput
        placeholder="E-MAIL"
        placeholderTextColor="#9c9c9c"
        style={styles.inputSignUp}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.inputSignUp}
        placeholderTextColor="#9c9c9c"
        placeholder="PASSWORD"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.customBtnBG}
        onPress={() => {
          debugger;
          onLogIn({ email, password });
        }}
      >
        <Text style={styles.customBtnText}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  signContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  underlineLogIn: {
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },
  logoSign: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
    margin: 40,
  },
  signUp: {
    color: "grey",
    fontSize: 20,
    fontFamily: "Nunito_900Black",
  },
  logIn: {
    color: "white",
    fontSize: 20,
    fontFamily: "Nunito_900Black",
  },
  containerSignUp: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#000000",
  },

  inputSignUp: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    color: "#4a4a4a",
    fontSize: 11,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    fontFamily: "Nunito_600SemiBold",
  },
  customBtnText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
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
});
