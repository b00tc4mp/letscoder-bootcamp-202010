import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import registerUser from './app/logic/register-user';



export default function App() {
  const [view, setView] = useState("sign-up")

  const handleGoToSignUp = () => {
    setView("sign-up")
  }

  const handleGoToSignIn = () => {
    setView("sign-in")
  }

  const handleSignUp = () => {
    try{
    registerUser(email, name, lastName, artistName, city, description, error => {
      if (error) return alert(error.message)
      
      setView('sign-in')
    })
  } catch (error) {
    alert(error.message)
  }
}

  return <ImageBackground 
  style={styles.background}
  source={require('./app/assets/background.png')}>

    { view === "" && <WelcomeScreen onGoToSignUp={handleGoToSignUp} onGoToSignIn={handleGoToSignIn}/>}
    { view === "sign-up" && <SignUpScreen onSignUp={handleSignUp} />}
    { view === "sign-in" && <SignInScreen />}
    
  </ImageBackground> 
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "space-around", 
  },
});