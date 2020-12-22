import React, { useState, useEffect } from 'react';
import LivesCard from "./LivesCard";
import { View, StyleSheet, Image, Dimensions, FlatList, ScrollView, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { LogBox } from 'react-native';


function PromoterProfileScreen({ onGoToEditProfile, onGoToLiveDetail, user, lives }) {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, [])

    
    const userId = user.id
    const imageURL = `http://192.168.1.131:4000/api/users/${userId}/images`
    

    if (user.role === 'ARTIST')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={styles.artistProfileHeader}>
                        <View style={{alignItems: "center", marginLeft: "3%"}}>
                            <TouchableOpacity onPress={onGoToEditProfile}>
                                <Image style={styles.profileAvatar}
                                    source={{ uri: `${imageURL}` }}
                                />
                                <Text style={styles.roleText}>ARTIST</Text>
                            </TouchableOpacity>

                            <TextInput
                                style={styles.artistName}
                                placeholder={'@' + user.artistName}
                                placeholderTextColor={"green"}
                                editable={false}>


                            </TextInput>
                        </View>                        
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.livesListContainer}>
                            
                        <FlatList style={styles.livesList}
                            // horizontal
                            
                            showsVerticalScrollIndicator={false}
                            data={lives}
                            keyExtractor={user._id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => { onGoToLiveDetail({ live: item }) }}>
                                    <LivesCard
                                        title={item.title}
                                        liveDate={item.liveDate}
                                        status={item.status}
                                        duration={item.duration}
                                        payment={item.payment}
                                        description={item.description}
                                        image= {{uri:`http://192.168.1.131:4000/api/lives/${item._id}/images`}}
                                    />
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                        <View style={styles.artistProfileBody}>

                            <View style={styles.linkContainer}>

                                <View style={styles.findMeContainer}>
                                    <Text style={styles.findMeText}>Find me on: </Text>
                                    <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                </View>

                                <TouchableOpacity onPress={() => Linking.openURL(user.youtubeLink)}>
                                    <Image style={styles.links} source={require('../assets/youtube-icon_2.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL(user.bandcampLink)}>
                                    <Image style={styles.links} source={require('../assets/bandcamp-icon_2.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL(user.spotifyLink)}>
                                    <Image style={styles.links} source={require('../assets/spotify-icon_2.png')} />
                                </TouchableOpacity>

                            </View>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({

    containerNavigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "black",
        marginTop: 15,

    },

    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        // marginLeft: "10%",
        borderWidth: 3,
        borderColor: "green",
        alignSelf: "center"
    },

    roleText: {
        textAlign: "center",
        fontFamily: "Roboto-Light",
        marginTop: "6%",
        // marginLeft: "-15%",
        // marginBottom: "-1%",
        fontSize: 7,
        alignSelf: "center"
        // borderBottomWidth: 2
    },

    artistName: {
        textAlign: "center",
        marginTop: "3%",
        fontFamily: "Roboto-Light",
        fontSize: 10,

    },


    artistProfileContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    artistProfileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
    },

    artistProfileBody: {
        marginTop: "8%",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    linkContainer: {
        marginTop: "30%",
        alignItems: "center",
    },

    findMeContainer: {
        flexDirection: "row"
    },

    findMeText: {
        marginRight: "5%",
        fontFamily: "Roboto_Regular400",
        fontSize: 25
    },

    instagramLogo: {
        width: 30,
        height: 30,
    },

    links: {
        marginTop: "8%",
        width: 200,
        height: 60,
    },

    livesListContainer: {
        height: "70%",
        
        
      },
    
      livesListHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
      },
    
      livesList: {
        marginTop: "10%",
        width: "90%",
        height: "80%",
      }

})

export default PromoterProfileScreen;