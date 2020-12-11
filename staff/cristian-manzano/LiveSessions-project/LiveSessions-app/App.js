//modules
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Alert } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import WelcomeScreen from './app/screens/WelcomeScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import HomeScreen from './app/screens/HomeScreen';

// Logics
import registerUser from './app/logic/register-user';
import authenticateUser from './app/logic/authenticate-user';



export default function App() {
  const [view, setView] = useState('sign-in')

  const handleGoToSignUp = () => {
    setView("sign-up")
  }

  const handleGoToSignIn = () => {
    setView("sign-in")
  }

  const handleSignUp = ({ fullname, email, password, role }) => {
    console.log(fullname, email, password, role)
    debugger
    try{
    registerUser( fullname, email, password, role, error => {
      if (error) return alert(error.message)
      
      setView('sign-in')
    })
  } catch (error) {
    alert(error.message)
  }
}
  const handleSignIn = ({ email, password }) => {
    try{
      authenticateUser( email, password, (error, token) => {
        if (error) return alert(error.message)

        AsyncStorage.setItem('token', token)
        .then(() => setView('home'))
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleLogOut = () => {
    AsyncStorage.removeItem('token')
    setView('sign-in')
  }

      useEffect(() => { 
        try{
          AsyncStorage.getItem('token')
          .then(token => {
            token && setView('home')
      })
        } catch(error) {
          AsyncStorage.removeItem('token')
          setView('sign-in')
        }
  },[])


  return <ImageBackground 
  style={styles.background}
  source={require('./app/assets/background.png')}>

    { view === "" && <WelcomeScreen onGoToSignUp={handleGoToSignUp} onGoToSignIn={handleGoToSignIn}/>}
    { view === "sign-up" && <SignUpScreen onSignUp={handleSignUp} />}
    { view === "sign-in" && <SignInScreen onSignIn={handleSignIn}/>}
    { view === "home" && <HomeScreen onHandleLogout={handleLogOut}/>}
    
  </ImageBackground> 
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "space-around", 
  },
});