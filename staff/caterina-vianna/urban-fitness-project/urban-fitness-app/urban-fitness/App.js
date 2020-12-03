//modules
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//screens
import { LogIn, SignUp, WelcomeScreen, Home } from "./app/components";

//logic
import { registerUser, authenticateUser } from "./app/logic";

export default function App() {
  const [view, setView] = useState("log-in");
  const [token, setToken] = useState();

  const storeData = async (token) => {
    try {
      await AsyncStorage.setItem("@storage_Key", token);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChangeToLogin = () => {
    setView("log-in");
  };

  const handleChangeToSignUp = () => {
    setView("sign-up");
  };

  const handleRegister = ({ firstName, lastName, email, password }) => {
    /* Alert.alert("aquí estan mis datos", firstName); */
    debugger;
    try {
      registerUser(firstName, lastName, email, password, (error) => {
        if (error) return alert(error.message);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogIn = ({ email, password }) => {
    try {
      debugger;
      authenticateUser(email, password, (error, token) => {
        if (error) return alert(error.message);
        storeData(token);
        setView("home");
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setToken(await AsyncStorage.getItem("@storage_Key"));
        if (token) {
          setView("home");
        }
      } catch (error) {
        alert(error.message);
      }
    })();
  });

  return (
    <View style={styles.backgroundDefault}>
      {view === "sign-up" && (
        <SignUp onSignUp={handleRegister} changeToLogIn={handleChangeToLogin} />
      )}
      {view === "log-in" && (
        <LogIn onLogIn={handleLogIn} changeToSignUp={handleChangeToSignUp} />
      )}
      {view === "welcome" && <WelcomeScreen />}
      {view === "home" && <Home token={token} />}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundDefault: {
    backgroundColor: "black",
  },
});
