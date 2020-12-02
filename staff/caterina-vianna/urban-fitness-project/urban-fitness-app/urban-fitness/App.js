import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { LogIn, SignUp, WelcomeScreen } from "./app/components";
import { registerUser, authenticateUser } from "./app/logic";

//hello
export default function App() {
  const [view, setView] = useState("sign-up");

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

  return (
    <View style={styles.backgroundDefault}>
      {view === "sign-up" && (
        <SignUp onSignUp={handleRegister} changeToLogIn={handleChangeToLogin} />
      )}
      {view === "log-in" && <LogIn changeToSignUp={handleChangeToSignUp} />}
      {view === "welcome" && <WelcomeScreen />}
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundDefault: {
    backgroundColor: "black",
  },
});
