import React, { useState } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialComunityIcons } from "@expo/vector-icons";

export default function LogIn({ changeToSignUp, onLogIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.containerSignUp}>
      {/* {icon && <MaterialComunityIcons name={icon} size={20} />} */}
      <Text style={styles.logoSign}>urban fitness</Text>
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
    fontWeight: "bold",
  },
  logIn: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
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
});
