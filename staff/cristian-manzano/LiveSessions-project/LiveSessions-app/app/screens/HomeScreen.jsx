// Modules
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Logic
import { retrieveUser } from '../logic';
import { editUser } from '../logic';
import { searchArtists } from '../logic';
import { saveUserImage } from '../logic';
//Screens
import ArtistProfileScreen from './ArtistProfileScreen'
import PromoterProfileScreen from './PromoterProfileScreen'
import EditProfileScreen from './EditProfileScreen'
import ArtistsMap from './ArtistsMap'
import DetailArtistProfileScreen from './DetailArtistProfileScreen'


export default function Home({ onHandleLogout }) {
  const [user, setUser] = useState()
  const [item, setItem] = useState()

  const [users, setUsers] = useState()

  const [view, setView] = useState('promoter.screen')

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => {
        try {
          retrieveUser(token, (error, user) => {
            if (error) return Alert.alert(error.message)

            setUser(user)
            if (user.role === 'ARTIST') {
              setView('artist-profile')
            }
            else {

              setView('promoter-profile')
            }
          })
        } catch (error) {
          Alert.alert(error.message)
        }
      })
  }, [])

  const handleGoToEditProfile = () => {
    setView('edit-profile')
  }

  const handleCancelEditProfile = () => {
    if (user.role === 'ARTIST') {
      setView('artist-profile')
    }
    else {
      setView('promoter-profile')
    }
  }

  const handleEditProfile = ({ fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description, imageUri }) => {
    console.log(user.email, fullname, artistName, city, description, tags)
    debugger
    try {
      editUser(user.email, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description, error => {
        if (error) return Alert.alert(error.message)
        AsyncStorage.getItem('token')
          .then(token => {
            try {
              saveUserImage(user.id, imageUri, (error) => {
                if (error) return alert(error.message);
                try {
                  retrieveUser(token, (error, user) => {
                    if (error) return Alert.alert(error.message)

                    setUser(user)
                  })
                } catch (error) {
                  Alert.alert(error.message)
                }
              })
            } catch (error) {
              Alert.alert(error.message)

            }
            if (user.role === 'ARTIST') {
              setView('artist-profile')
            }
            else {
              setView('promoter-profile')
            }
          })
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }


  const handleSearch = ({ query }) => {
    console.log(query)
    AsyncStorage.getItem('token')
      .then(token => {
        try {
          searchArtists(token, query, (error, users) => {
            if (error) return Alert.alert(error.message)
            console.log(users)
            setUsers(users)
            setView('results')
          })
        } catch (error) {
          Alert.alert(error.message)
        }
      })
  }

  const handleonGoToArtistProfile = ({ item }) => {
    console.log(item)
    setItem(item)
    setView('detail-artist-profile')
  }

  const handleGoToPetitions = () => {
    setView('petitions')
  }

  return (

    <View>
      { view === 'promoter-profile' && <PromoterProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onSearch={handleSearch} />}
      { view === 'artist-profile' && <ArtistProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} />}
      { view === 'edit-profile' && <EditProfileScreen user={user} onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile} />}
      { view === 'results' && <View style={{
        backgroundColor: "#f8f4f4",
        paddingHorizontal: 20,
      }}><ArtistsMap users={users} onGoToArtistProfile={handleonGoToArtistProfile} />
      </View>}
      { view === 'detail-artist-profile' && <DetailArtistProfileScreen item={item} onLogOut={onHandleLogout} onGoToPetitions={handleGoToPetitions} />}
      { view === 'petitions'}
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