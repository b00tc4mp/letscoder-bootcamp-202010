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
        if (error) return Alert.alert(error.message);

        try {
          debugger;
          authenticateUser(email, password, (error, token) => {
            if (error) return Alert.alert(error.message);
            AsyncStorage.setItem("token", token).then(() => setView("home"));
          });
        } catch (error) {
          Alert.alert(error.message);
        }
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogIn = ({ email, password }) => {
    try {
      debugger;
      authenticateUser(email, password, (error, token) => {
        if (error) return Alert.alert(error.message);
        AsyncStorage.setItem("token", token).then(() => setView("home"));
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleLogOut = () => {
    AsyncStorage.removeItem("token");
    setView("sign-up");
  };
  useEffect(() => {
    try {
      AsyncStorage.getItem("token").then((token) => {
        token && setView("home");
      });
    } catch (error) {
      AsyncStorage.removeItem("token");
      setView("sign-in");
    }
  }, []);

  return (
    <View style={styles.backgroundDefault}>
      {view === "sign-up" && (
        <SignUp onSignUp={handleRegister} changeToLogIn={handleChangeToLogin} />
      )}
      {view === "log-in" && (
        <LogIn onLogIn={handleLogIn} changeToSignUp={handleChangeToSignUp} />
      )}
      {view === "welcome" && <WelcomeScreen />}
      {view === "home" && <Home handleLogOut={handleLogOut} />}
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundDefault: {
    backgroundColor: "black",
  },
});
