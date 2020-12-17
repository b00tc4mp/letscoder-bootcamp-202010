import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Image, Alert, Dimensions, ScrollView, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function PromoterProfileScreen({ onGoToEditProfile, onGoToLives, onLogOut, onGoToProfile, user }) {

debugger
    const userId = user.id
    // const imageURL = `http://192.168.1.131:4000/api/users/${userId}/images`

    if (user.role === 'ARTIST')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                        <View style={styles.artistProfileHeader}>
                            <TouchableOpacity onPress={onGoToProfile}>
                                <Image style={styles.logo} source={require('../assets/artist-role-image.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onLogOut}>
                                <Image style={styles.logoutIcon} source={require('../assets/logout-icon.png')} />
                            </TouchableOpacity>
                        </View>
                    <ScrollView>


                        <View style={styles.containerNavigation}>
                            <TouchableOpacity onPress={onGoToEditProfile}>
                                <Image style={styles.profileAvatar}
                                    source={{ uri: `http://192.168.1.131:4000/api/users/${user.id}/images` }}
                                    style={{ width: 50, height: 50, borderRadius: 60 / 2 }} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                            style={styles.petitionsButtonContainer}
                            onPress={onGoToLives}>
                                <Text style={styles.petitionsButton}>Lives</Text>
                            </TouchableOpacity>

                        </View>




                        <View style={styles.artistProfileBody}>
                            <TextInput
                                style={styles.artistName}
                                placeholder={'@' + user.artistName}
                                editable={false}>

                            </TextInput>
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
    logo: {
        width: 60,
        height: 60
    },



    containerNavigation: {
        marginTop: "5%",
        padding: "5%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "black",
        marginBottom: 20,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },



    
    logoutIcon: {
        marginTop: "20%",
        width: 48,
        height: 48,
    },
    


    profileAvatar: {
        borderRadius: 50
    },

    petitionsButtonContainer: {
        width: "100%",
        height: 44,
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",
        
    },


    petitionsButton: {
        fontSize: 25,
        width: "50%",
        alignSelf: "center",
        textAlign: "center",
        height: 40,
        borderRadius: 50,
        borderWidth: 1,

        color: "#343a40",
    
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        
    },


    artistProfileContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    artistProfileHeader: {
        // position: fixed,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        borderBottomWidth: 4,
        borderBottomColor: "#343a40"
    },

    artistProfileBody: {
        marginTop: "8%",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    linkContainer: {
        marginTop: "30%",
        alignItems: "center",


    },

    artistName: {
        textAlign: "center",
        marginTop: "10%",
        // marginBottom: "-1%",
        fontSize: 38,
        // borderBottomWidth: 2

    },

    findMeContainer: {
        flexDirection: "row"
    },

    findMeText: {
        marginRight: "5%",

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
    }

})

export default PromoterProfileScreen;