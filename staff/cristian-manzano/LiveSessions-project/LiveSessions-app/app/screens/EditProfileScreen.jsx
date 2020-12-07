import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onCancelEditProfile, onEditProfile, user }) {
    const [ fullname, setFullname ] = useState('')
    const [ artistName, setArtistName ] = useState('')
    const [ city, setCity ] = useState('')
    const [ tags, setTags ] = useState('')
    const [ youtubeLink, setYoutubeLink ] = useState('')
    const [ bandcampLink, setBandcampLink ] = useState('')
    const [ spotifyLink, setSpotifyLink ] = useState('')
    const [ description, setDescription ] = useState('')
    
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
                    placeholder={(user.fullname ? ' ' + user.fullname : ' Fullname')}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40" 
                    onChangeText={fullname => setFullname(fullname)}
                    value={fullname}>
                </TextInput>

                <TextInput
                    placeholder={(user.artistName ? ' ' + user.artistName : ' City')}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={artistName => setArtistName(artistName)}
                    value={artistName}>
                </TextInput>

                <TextInput
                    placeholder={(user.city ? ' ' + user.city : ' City')}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={city => setCity(city)}
                    value={city}
                    >
                </TextInput>

                <TextInput
                    placeholder={(user.tags ? ' ' + user.tags : ' Music Tags (Rock, Jazz, punk, etc)')}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={tags => setTags(tags ? tags.split(', ') : [])}
                    value={tags}
                    >
                </TextInput>

                <TextInput
                    placeholder={(user.youtubeLink ? ' ' + user.youtubeLink : " Youtube Link")}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={youtubeLink => setYoutubeLink(youtubeLink)}
                    value={youtubeLink}
                    >
                </TextInput>

                <TextInput
                    placeholder={(user.bandcampLink ? ' ' + user.bandcampLink : " Bandcamp Link")}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={bandcampLink => setBandcampLink(bandcampLink)}
                    value={bandcampLink}
                    >
                </TextInput>

                <TextInput
                    placeholder={(user.spotifyLink ? ' ' + user.spotifyLink : " Spotify Link")}
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={spotifyLink => setSpotifyLink(spotifyLink)}
                    value={spotifyLink}
                    >
                </TextInput>

                <TextInput
                    placeholder={(user.description ? ' ' + user.description : ' Description')}
                    style={styles.descriptionSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={description => setDescription(description)}
                    value={description}
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