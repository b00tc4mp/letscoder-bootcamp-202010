//modules
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Alert } from 'react';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   useFonts,
//   Roboto_Regular400,
//   Roboto_Bold700,
//   Roboto_Black900,
// } from '@expo-google-fonts/roboto';


// Screens
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import HomeScreen from './app/screens/HomeScreen';

// Logics
import registerUser from './app/logic/register-user';
import authenticateUser from './app/logic/authenticate-user';




export default function App() {

  
  let [fontsLoaded, setFontsLoaded] = useState(
    false);
  
  
    const getFonts = () => Font.loadAsync ({
      'roboto-bold': require('./app/assets/font/RobotoBold.otf'),
      'roboto-light300': require('./app/assets/font/Roboto-Light.ttf'),
      'roboto-thin': require('./app/assets/font/Roboto-Thin.ttf')
    })
  const [view, setView] = useState('sign-up')

    
    

    const handleGoToSignUp = () => {
      setView("sign-up")
    }

    const handleGoToSignIn = () => {
      setView("sign-in")
    }

    const handleSignUp = ({ fullname, email, password, role }) => {
      console.log(fullname, email, password, role)
      debugger
      try {
        registerUser(fullname, email, password, role, error => {
          if (error) return alert(error.message)

          setView('sign-in')
        })
      } catch (error) {
        alert(error.message)
      }
    }
    const handleSignIn = ({ email, password }) => {
      try {
        authenticateUser(email, password, (error, token) => {
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
      try {
        AsyncStorage.getItem('token')
          .then(token => {
            token && setView('home')
          })
      } catch {
        AsyncStorage.removeItem('token')
        setView('sign-in')
      }
    }, [])

    
    if(fontsLoaded){
    return  <View style={{ backgroundColor: "#ECECEC" }}>
      {view === "sign-up" && <SignUpScreen onSignUp={handleSignUp} onGoToSignIn={handleGoToSignIn} fontsLoaded={fontsLoaded}/>}
      {view === "sign-in" && <SignInScreen onSignIn={handleSignIn} onGoToSignUp={handleGoToSignUp} />}
      {view === "home" && <HomeScreen onHandleLogout={handleLogOut} fontsLoaded={fontsLoaded}/>}
      {/* {view !== "sign-up" && view !== "sign-in" && view !== "home" && <AppLoading />} */}
    </View>}
    else {
      return (
        <AppLoading 
          startAsync={getFonts}
          onError={(error) => {throw error}}
          onFinish={() => setFontsLoaded(true)}
        />
    )}
  };


  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "space-around",
    },
  })