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
import { modifyLive } from '../logic'

//Screens
import ArtistProfileScreen from './ArtistProfileScreen'
import PromoterProfileScreen from './PromoterProfileScreen'
import EditProfileScreen from './EditProfileScreen'
import ArtistsMap from './ArtistsMap'
import DetailArtistProfileScreen from './DetailArtistProfileScreen'
import PetitionScreen from './PetitionScreen'
import LivesMap from './LivesMap'
import DetailLiveScreen from './DetailLiveScreen'
import EditLiveScreen from './EditLiveScreen'


export default function Home({ onHandleLogout }) {
  const [user, setUser] = useState()
  const [item, setItem] = useState()
  const [users, setUsers] = useState()
  const [lives, setLives] = useState()
  const [live, setLive] = useState()
  const [view, setView] = useState('')




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
              if (imageUri)
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
              try {
                if (!imageUri)
                  retrieveUser(token, (error, user) => {
                    if (error) return Alert.alert(error.message)

                    setUser(user)
                  })
              } catch (error) {
                Alert.alert(error.message)
              }
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

  const handleGoToArtistProfile = ({ item }) => {
    console.log(item)
    setItem(item)
    setView('detail-artist-profile')
  }

  const handleGoToPetitions = () => {
    setView('petitions')
  }

  const handleSubmitPetition = ({ title, date, status, duration, payment, description }) => {
    debugger
    const promoterId = user.id
    const artistId = item._id
    try {
      saveLive(promoterId, artistId, undefined, title, date, status, duration, payment, description, (error) => {
        if (error) return Alert.alert(error.message)

        setView('promoter-profile')

      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleAcceptPetition = ({ promoterId, artistId, liveId, title, liveDate, duration, payment, description }) => {
    const statusAccepted = 'ACCEPTED'
    console.log(liveId)
    try {
      saveLive(promoterId, artistId, liveId, title, liveDate, statusAccepted, duration, payment, description, (error) => {
        debugger
        if (error) return Alert.alert(error.message)
        AsyncStorage.getItem('token')
          .then(token => {
            try {
              debugger
              retrieveLives(token, (error, lives) => {
                if (error) return alert(error.message);
                setLives(lives);

                setView("lives");
              });
            } catch (error) {
              alert(error.message);
            }
          })
        setView('lives')

      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleDeniePetition = ({ promoterId, artistId, liveId, title, liveDate, duration, payment, description }) => {
    const statusAccepted = 'DENIED'
    console.log(liveId)
    try {
      saveLive(promoterId, artistId, liveId, title, liveDate, statusAccepted, duration, payment, description, (error) => {
        debugger
        if (error) return Alert.alert(error.message)
        AsyncStorage.getItem('token')
          .then(token => {
            debugger
            try {
              debugger
              retrieveLives(token, (error, lives) => {
                if (error) return alert(error.message);
                setLives(lives);

                setView("lives");
              });
            } catch (error) {
              alert(error.message);
            }
          })
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleGoToLiveDetail = ({ live }) => {
    console.log(live)
    setLive(live)
    setView('live-detail')
  }

  const handleRetrieveLives = () => {

    AsyncStorage.getItem('token')
      .then(token => {
        try {
          debugger
          retrieveLives(token, (error, lives) => {
            if (error) return alert(error.message);
            setLives(lives);

            setView("lives");
          });
        } catch (error) {
          alert(error.message);
        }
      })
  }

  const handleGoToModifyLive = () => {
    setView('edit-live')
  }

  const handleModifyLive = ({ liveId, title, liveDate, duration, payment, description }) => {
    debugger
    try {
      modifyLive(liveId, title, liveDate, duration, payment, description, (error) => {
        if (error) return Alert.alert(error.message)
        AsyncStorage.getItem('token')
          .then(token => {
            try {
              debugger
              retrieveLives(token, (error, lives) => {
                if (error) return alert(error.message);
                setLives(lives);

                setView("lives");
              });
            } catch (error) {
              alert(error.message);
            }
          })
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  const handleGoToProfile = () => {
    if (user.role === 'ARTIST') {
      setView('artist-profile')
    }
    else {
      setView('promoter-profile')
    }
  }


  return (

    <View>
      { view === 'promoter-profile' && <PromoterProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onSearch={handleSearch} onGoToLives={handleRetrieveLives} onGoToProfile={handleGoToProfile} />}
      { view === 'artist-profile' && <ArtistProfileScreen user={user} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onGoToLivePetitions={handleRetrieveLives} onGoToProfile={handleGoToProfile} />}
      { view === 'edit-profile' && <EditProfileScreen user={user} onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile} onGoToProfile={handleGoToProfile} />}
      { view === 'results' && <View style={{
        backgroundColor: "#f8f4f4",
        paddingHorizontal: 20,
      }}><ArtistsMap users={users} onGoToArtistProfile={handleGoToArtistProfile} onGoToProfile={handleGoToProfile} />
      </View>}

      { view === 'detail-artist-profile' && <DetailArtistProfileScreen item={item} onLogOut={onHandleLogout} onGoToPetitions={handleGoToPetitions} onGoToProfile={handleGoToProfile} />}
      { view === 'petitions' && <PetitionScreen onSubmitPetition={handleSubmitPetition} onGoToProfile={handleGoToProfile} />}
      { view === 'lives' && <View style={{
        backgroundColor: "#f8f4f4",
        paddingHorizontal: 20,
      }}><LivesMap lives={lives} user={user} onGoToLiveDetail={handleGoToLiveDetail} onGoToProfile={handleGoToProfile} />
      </View>}
      { view === 'live-detail' && <DetailLiveScreen live={live} user={user} onAcceptPetition={handleAcceptPetition} onDeniePetition={handleDeniePetition} onModifyLive={handleGoToModifyLive} onGoToProfile={handleGoToProfile} />}
      { view === 'edit-live' && <EditLiveScreen live={live} onModifyLive={handleModifyLive} onGoToProfile={handleGoToProfile} />}
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