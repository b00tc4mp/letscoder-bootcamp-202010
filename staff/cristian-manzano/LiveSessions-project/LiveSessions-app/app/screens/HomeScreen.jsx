// Modules
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Logic
import { retrieveUser } from '../logic';
import { editUser } from '../logic';
//Screens
import ProfileScreen from './ProfileScreen'
import EditProfileScreen from './EditProfileScreen'


export default function Home() {
    const [name, setName] = useState()


    const [view, setView] = useState('')

    useEffect(() => { 
        AsyncStorage.getItem('token')
        .then(token => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return Alert.alert(error.message)
              const { fullname } = user

                setName(fullname)
                setView('profile')
            })
        } catch (error) {
            Alert.alert(error.message)
        }  
    })
  },[])

  const handleGoToEditProfile = () => {
    setView('edit-profile')
  }

  const handleCancelEditProfile = () => {
    setView('profile')
  }

  const handleEditProfile = ({ fullname, artistName, city, description, tags }) => {
    console.log(fullname, artistName, city, description, tags)
    debugger
    try{
      editUser( fullname, artistName, city, description, tags, error => {
        if (error) return Alert.alert(error.message)

        setView('profile')
      })
    } catch(error) {
      Alert.alert(error.message)
    }

  }

  return (

    <View>
      { view ===  'profile' && <ProfileScreen onGoToEditProfile={handleGoToEditProfile}/>}
      { view === 'edit-profile' && <EditProfileScreen onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile}/>}
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