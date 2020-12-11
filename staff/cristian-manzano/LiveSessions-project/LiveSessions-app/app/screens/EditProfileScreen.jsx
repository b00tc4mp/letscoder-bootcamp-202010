import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onCancelEditProfile, onEditProfile, user }) {
    const [ fullname, setFullname ] = useState(user.fullname)
    const [ artistName, setArtistName ] = useState(user.artistName)
    const [ city, setCity ] = useState(user.city)
    const [ tags, setTags ] = useState(user.tags)
    const [ youtubeLink, setYoutubeLink ] = useState(user.youtubeLink)
    const [ bandcampLink, setBandcampLink ] = useState(user.bandcampLink)
    const [ spotifyLink, setSpotifyLink ] = useState(user.spotifyLink)
    const [ description, setDescription ] = useState(user.description)
    
    return (
        <SafeAreaView>
        <KeyboardAvoidingView
    //   behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
    >
        <ScrollView>
            <View style={styles.formEditProfile}>
                <View style={styles.signUpHeader}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
       
                </View>

                <TextInput
                    placeholder=' Fullname'
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40" 
                    onChangeText={fullname => setFullname(fullname)}
                    
                    defaultValue={(user.fullname ? ' ' + user.fullname : '')}
                    >
                </TextInput>

                <TextInput
                    placeholder=' Artist Name'
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={artistName => setArtistName(artistName)}
                    defaultValue={user.artistName ? ' ' + user.artistName : ''}
                    >
                </TextInput>


                <TextInput
                    placeholder=' City'
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={city => setCity(city)}
                    defaultValue={user.city ? ' ' + user.city : ''}
                    >
                </TextInput>

                <TextInput
                    placeholder=' Music Tags (Rock, Jazz, punk, etc)'
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={tags => setTags(tags ? tags.split(',') : [])}
                    defaultValue={user.tags ? ' ' + user.tags : ''}
                    >
                </TextInput>

                <TextInput
                    placeholder=" Youtube Link"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={youtubeLink => setYoutubeLink(youtubeLink)}
                    defaultValue={user.youtubeLink ? ' ' + user.youtubeLink : ""}
                    >
                </TextInput>

                <TextInput
                    placeholder=" Bandcamp Link"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={bandcampLink => setBandcampLink(bandcampLink)}
                    defaultValue={user.bandcampLink ? ' ' + user.bandcampLink : ""}
                    >
                </TextInput>

                <TextInput
                    placeholder=" Spotify Link"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={spotifyLink => setSpotifyLink(spotifyLink)}
                    defaultValue={user.spotifyLink ? ' ' + user.spotifyLink : ""}
                    >
                </TextInput>

                <TextInput
                    placeholder=' Description'
                    style={styles.descriptionSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={description => setDescription(description)}
                    defaultValue={user.description ? ' ' + user.description : ""}
                    >
                </TextInput>

                <TouchableOpacity style={styles.editProfileButton}
                onPress={ () => {onEditProfile ({ fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description })}}>
                    <Text style={styles.buttonText}>Save!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.editProfileButton}
                onPress={ () => {onCancelEditProfile()}}>
                    <Text style={styles.buttonText}>Cancel!</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    formEditProfile: {
        justifyContent: "space-evenly",
        // marginTop: "-15%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    signUpHeader: {
        backgroundColor: "gray",
        // marginTop: "-8%",
        width: "100%",
        height: "10%",
    },

    logo: {
        width: 50,
        height: 50,
    },

    inputsSignUp: {
        marginLeft: "5%",
        width: "50%",
        height: "5%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40"
    },

    descriptionSignUp: {
        marginLeft: "5%",
        width: "90%",
        height: "25%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40"
    },

    signUpButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "30%",
        height: "5%" 
    }
})

export default SignUpScreen;