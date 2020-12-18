//modules
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Alert } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   useFonts,
//   Inter_900Black,
// } from '@expo-google-fonts/inter';

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

// Screens
import SignUpScreen from './app/screens/SignUpScreen';
import SignInScreen from './app/screens/SignInScreen';
import HomeScreen from './app/screens/HomeScreen';

// Logics
import registerUser from './app/logic/register-user';
import authenticateUser from './app/logic/authenticate-user';




// Setting a default background color for all View components.
const customViewProps = {
  style: {
  }
};
 
// Getting rid of that ugly line on Android and adding some custom style to all TextInput components.
const customTextInputProps = {
  // underlineColorAndroid: 'rgba(0,0,0,0)',
  style: {
    // fontFamily: "San Francisco"
  }
};
 
// Setting default styles for all Text components.
const customTextProps = {
  style: {
    // fontFamily: "San Francisco"
  }
};
 
// Makes every image resize mode cover by default.
const customImageProps = {
  // resizeMode: 'contain'
};
 
// Adds a bigger hit box for all TouchableOpacity's.
const customTouchableOpacityProps = {

};

// let [fontsLoaded] = useFonts({
//   Roboto_Regular400,
//   Roboto_Bold700,
//   Roboto_Black900,
// });
// if (!fontsLoaded) {
//   return <AppLoading />;
export default function App() {
  setCustomView(customViewProps);
  setCustomTextInput(customTextInputProps);
  setCustomText(customTextProps);
  setCustomImage(customImageProps);
  setCustomTouchableOpacity(customTouchableOpacityProps);

  
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
        } catch {
          AsyncStorage.removeItem('token')
          setView('sign-in')
        }
  },[])


  return <View>

    { view === "sign-up" && <SignUpScreen onSignUp={handleSignUp} onGoToSignIn={handleGoToSignIn}/>}
    { view === "sign-in" && <SignInScreen onSignIn={handleSignIn} onGoToSignUp={handleGoToSignUp}/>}
    { view === "home" && <HomeScreen onHandleLogout={handleLogOut}/>}
    
  </View> 
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "space-around", 
  },
});