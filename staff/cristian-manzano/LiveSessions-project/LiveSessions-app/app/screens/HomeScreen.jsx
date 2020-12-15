// Modules
import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// Logic
import { retrieveUser } from '../logic';
import { editUser } from '../logic';
import { searchArtists } from '../logic';
import { saveUserImage } from '../logic';
import { saveLive } from '../logic';
import { retrieveLives } from '../logic'
//Screens
import ArtistProfileScreen from './ArtistProfileScreen'
import PromoterProfileScreen from './PromoterProfileScreen'
import EditProfileScreen from './EditProfileScreen'
import ArtistsMap from './ArtistsMap'
import DetailArtistProfileScreen from './DetailArtistProfileScreen'
import PetitionScreen from './PetitionScreen'


export default function Home({ onHandleLogout }) {
  const [user, setUser] = useState()
  const [item, setItem] = useState()
  const [users, setUsers] = useState()
  const [lives, setLives] = useState()
  const [view, setView] = useState('petitions')




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
          AsyncStorage.removeItem('token')
          setView('sign-in')
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

  const handleSubmitPetition = ({ title, date, status, duration, payment, description }) => {
    debugger
    const artistId = item._id
    const promoterId = user.id
    try {
      saveLive(promoterId, artistId, undefined, title, date, status, duration, payment, description, (error) => {
        if (error) return Alert.alert(error.message)

        setView('promoter-profile')

      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleRetrieveLives = () => {
    
    AsyncStorage.getItem('token')
      .then(token => {
        try {
          retrieveLives(token, (error, lives) => {
            if (error) return alert(error.message);

            setLives(lives);
            setView("list-mode");
          });
        } catch (error) {
          alert(error.message);
        }
      })
  }

  return (

    <View>
      { view === 'promoter-profile' && <PromoterProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onSearch={handleSearch} onGoToLives={handleRetrieveLives} />}
      { view === 'artist-profile' && <ArtistProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onGoToLivePetitions={handleRetrieveLives} />}
      { view === 'edit-profile' && <EditProfileScreen user={user} onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile} />}
      { view === 'results' && <View style={{
        backgroundColor: "#f8f4f4",
        paddingHorizontal: 20,
      }}><ArtistsMap users={users} onGoToArtistProfile={handleonGoToArtistProfile} />
      </View>}
      { view === 'detail-artist-profile' && <DetailArtistProfileScreen item={item} onLogOut={onHandleLogout} onGoToPetitions={handleGoToPetitions} />}
      { view === 'petitions' && <PetitionScreen onSubmitPetition={handleSubmitPetition} />}
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