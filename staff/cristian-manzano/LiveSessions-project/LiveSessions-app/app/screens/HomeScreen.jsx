// Modules
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Logic
import { retrieveUser } from '../logic';
import { editUser } from '../logic';
import { searchArtists } from '../logic'; 
//Screens
import ArtistProfileScreen from './ArtistProfileScreen'
import PromoterProfileScreen from './PromoterProfileScreen'
import EditProfileScreen from './EditProfileScreen'
import ArtistsMap from './ArtistsMap'


export default function Home({ onHandleLogout }) {
    const [user, setUser] = useState()

    const [ users, setUsers ] = useState()

    const [view, setView] = useState('promoter.screen')

    useEffect(() => { 
        AsyncStorage.getItem('token')
        .then(token => {
        try {
            retrieveUser(token, (error, user) => {
                if (error) return Alert.alert(error.message)

                setUser(user)
                if (user.role === 'ARTIST'){
                setView('artist-profile')}
                  else {
                
                setView('promoter-profile')}
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
    if (user.role === 'ARTIST'){
      setView('artist-profile')}
        else {
      setView('promoter-profile')}
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


    const handleSearch = ({ query }) => {
      console.log(query)
      AsyncStorage.getItem('token')
      .then(token => {
        try{
          searchArtists(token, query, (error, users) => {
            if(error) return Alert.alert(error.message)
            console.log(users)
            setUsers(users)
            setView('artist-map')
          })
        } catch(error) {
          Alert.alert(error.message)
        }
      })
      }


  return (

    <View>
      { view ===  'promoter-profile' && <PromoterProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onSearch={handleSearch}/>}
      { view ===  'artist-profile' && <View><ArtistProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} /> 
      <ArtistsMap users={users} /></View>} 
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