// Modules
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Logic
import { retrieveUser } from '../logic';
import { editUser } from '../logic';
//Screens
import ArtistProfileScreen from './ArtistProfileScreen'
import PromoterProfileScreen from './ArtistProfileScreen'
import EditProfileScreen from './EditProfileScreen'


export default function Home({ onHandleLogout }) {
    const [user, setUser] = useState()

    const [view, setView] = useState('')

    useEffect(() => { 
        AsyncStorage.getItem('token')
        .then(token => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return Alert.alert(error.message)
              

                setUser(user)
                if (user.role === 'ARTIST')
                setView('artist-profile')
                else (user.role === 'PROMOTER')
                setView('promoter-profile')
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
  
  const handleEditProfile = ({ fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description }) => {
      console.log(user.email, fullname, artistName, city, description, tags)
      debugger
      try{
        editUser(user.email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description, error => {
          if (error) return Alert.alert(error.message)
          AsyncStorage.getItem('token')
          .then(token => {
          try {
              retrieveUser(token, (error, user) => {
                  if (error) return Alert.alert(error.message)
                
  
                  setUser(user)
              })
          } catch (error) {
              Alert.alert(error.message)
          }  
      })
          setView('profile')
        })
      } catch(error) {
        Alert.alert(error.message)
      }
    }



  return (

    <View>
      { view ===  'artist-profile' && <PromoterProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} />}
      { view ===  'promoter-profile' && <ArtistProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} />}
      { view === 'edit-profile' && <EditProfileScreen user={user} onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile}/>}
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