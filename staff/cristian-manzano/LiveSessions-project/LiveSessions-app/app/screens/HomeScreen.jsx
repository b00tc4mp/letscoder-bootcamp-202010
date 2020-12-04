// Modules
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Logic
import { retrieveUser } from '../logic';
import ProfileScreen from './ProfileScreen'
import EditProfileScreen from './EditProfileScreen'
//Screens


export default function Home() {
    const [name, setName] = useState()

    const [view, setView] = useState('sign-in')

    useEffect(() => { 
        AsyncStorage.getItem('token')
        .then(token => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return Alert.alert(error.message)
              const { fullname } = user

                setName(fullname)
            })
        } catch (error) {
            Alert.alert(error.message)
        }  
    })
  },[])

  const handleGoToEditProfile = () => {
    setView('edit-profile')
  }

  return (

    <View>

      <ProfileScreen onGoToEditProfile={handleGoToEditProfile}/>
      { view === 'edit-profile' && <EditProfileScreen />}
    </View>
    
  );

}
const styles = StyleSheet.create({
  backgroundHome: {
    backgroundColor: "blue",
  },
  textName: {
    color: "pink",
  },
});