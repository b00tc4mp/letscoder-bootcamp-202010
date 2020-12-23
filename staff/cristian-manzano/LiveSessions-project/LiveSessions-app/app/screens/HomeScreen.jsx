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
import { saveLiveImage } from '../logic';
import { retrieveLives } from '../logic';
import { modifyLive } from '../logic';

//Screens
import ArtistProfileScreen from './ArtistProfileScreen'
import PromoterProfileScreen from './PromoterProfileScreen'
import EditPromoterProfileScreen from './EditPromoterProfileScreen'
import EditArtistProfileScreen from './EditArtistProfileScreen'
import DetailArtistProfileScreen from './DetailArtistProfileScreen'
import PetitionScreen from './PetitionScreen'
import DetailLiveScreen from './DetailLiveScreen'
import EditLiveScreen from './EditLiveScreen'
import PromoterProfileScreenArtistsList from './PromoterProfileScreenArtistsList'


export default function Home({ onHandleLogout, fontsLoaded }) {
  let [user, setUser] = useState()
  let [item, setItem] = useState()
  let [users, setUsers] = useState()
  let [lives, setLives] = useState()
  let [live, setLive] = useState()
  let [view, setView] = useState('')




  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(token => {
        try {
          retrieveUser(token, (error, user) => {
            if (error) return Alert.alert(error.message)

            setUser(user)
            try {
              retrieveLives(token, (error, lives) => {
                if (error) return alert(error.message);
                setLives(lives);

                // setView("lives");
              });
            } catch (error) {
              alert(error.message);
            }
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
    if (user.role === 'ARTIST') {
      setView('edit-artist-profile')
    }
    else {
      setView('edit-promoter-profile')
    }
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

  const handleSubmitPetition = ({ title, liveDate, status, duration, payment, description }) => {
    debugger
    const promoterId = user.id
    const artistId = item._id
    try {
      saveLive(promoterId, artistId, undefined, title, liveDate, status, duration, payment, description, (error) => {
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

                if (user.role === 'ARTIST') {
                  setView('artist-profile')
                }
                else {
                  setView('promoter-profile')
                }
              });
            } catch (error) {
              alert(error.message);
            }
          })
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

                if (user.role === 'ARTIST') {
                  setView('artist-profile')
                }
                else {
                  setView('promoter-profile')
                }
              });
            } catch (error) {
              alert(error.message);
            }
          })
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

  const handleModifyLive = ({imageUri, liveId, title, liveDate, duration, payment, description }) => {
    debugger
    try {
      modifyLive(liveId, title, liveDate, duration, payment, description, (error) => {
        if (error) return Alert.alert(error.message)
        AsyncStorage.getItem('token')
          .then(token => {
            try {
              if (imageUri)
                saveLiveImage(liveId, imageUri, (error) => {
                  if (error) return alert(error.message);
                  try {
                    retrieveLives(token, (error, lives) => {
                      if (error) return Alert.alert(error.message)

                      setLives(lives)
                      
                    })
                  } catch (error) {
                    Alert.alert(error.message)
                  }
                })
              try {
                if (!imageUri)
                  retrieveLives(token, (error, lives) => {
                    if (error) return Alert.alert(error.message)

                    setLives(lives)
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

  const handleGoToProfile = () => {
    if (user.role === 'ARTIST') {
      setView('artist-profile')
    }
    else {
      setView('promoter-profile')
    }
  }

  const handleGoBack = () => {
    if (user.role === 'ARTIST') {
      setView('artist-profile')
    }
    else {
      setView('promoter-profile')
    }
  }

  


  return (

    <View>
      { view === 'promoter-profile' && <PromoterProfileScreen user={user} lives={lives} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onSearch={handleSearch} onGoToLives={handleRetrieveLives} onGoToProfile={handleGoToProfile} onGoToLiveDetail={handleGoToLiveDetail}/>}
      { view === 'artist-profile' && <ArtistProfileScreen user={user} lives={lives} onGoToEditProfile={handleGoToEditProfile} onLogOut={onHandleLogout} onGoToLivePetitions={handleRetrieveLives} onGoToProfile={handleGoToProfile} onGoToLiveDetail={handleGoToLiveDetail}/>}
      { view === 'edit-promoter-profile' && <EditPromoterProfileScreen user={user} onGoBack={handleGoBack} onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile} onGoToProfile={handleGoToProfile} onLogOut={onHandleLogout}/>}
      { view === 'edit-artist-profile' && <EditArtistProfileScreen user={user} onEditProfile={handleEditProfile} onCancelEditProfile={handleCancelEditProfile} onGoBack={handleGoBack} onLogOut={onHandleLogout}/>}
      { view === 'results' && <PromoterProfileScreenArtistsList user={user} users={users} onGoBack={handleGoBack} onGoToArtistProfile={handleGoToArtistProfile} onGoToProfile={handleGoToProfile} onSearch={handleSearch}/>}
      { view === 'detail-artist-profile' && <DetailArtistProfileScreen item={item} onGoBack={handleGoBack} onGoToPetitions={handleGoToPetitions} onGoToProfile={handleGoToProfile} />}
      { view === 'petitions' && <PetitionScreen onSubmitPetition={handleSubmitPetition} item={item} onGoToProfile={handleGoToProfile} user={user} onGoBack={handleGoBack}/>}
      { view === 'live-detail' && <DetailLiveScreen live={live} user={user} onAcceptPetition={handleAcceptPetition} onDeniePetition={handleDeniePetition} onModifyLive={handleGoToModifyLive} onGoBack={handleGoBack} />}
      { view === 'edit-live' && <EditLiveScreen live={live} onGoBack={handleGoBack} onModifyLive={handleModifyLive} onGoToProfile={handleGoToProfile} />}
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