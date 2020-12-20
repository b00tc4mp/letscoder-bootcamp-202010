import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";

import { Alert, Button, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function EditPromoterProfileScreen({ onCancelEditProfile, onEditProfile, user, onLogOut, onGoBack }) {
    const [fullname, setFullname] = useState(user.fullname)
    const [artistName, setArtistName] = useState(user.artistName)
    const [city, setCity] = useState(user.city)
    const [tags, setTags] = useState(user.tags)
    const [youtubeLink, setYoutubeLink] = useState(user.youtubeLink)
    const [bandcampLink, setBandcampLink] = useState(user.bandcampLink)
    const [spotifyLink, setSpotifyLink] = useState(user.spotifyLink)
    const [description, setDescription] = useState(user.description)

    const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library");
    };
    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) setImageUri({ localUri: result.uri });
        else console.log("Error reading image");
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
            >
                <ScrollView >
                    <View style={styles.EditProfileContainer}

                        style={{ padding: 10 }}>
                        <View style={styles.signUpHeader}>

                        <TouchableOpacity onPress={onGoBack}>
                            <Image
                                style={styles.goBackIcon}
                                source={require("../assets/Arrow_Back.png")}
                            />
                        </TouchableOpacity>

                            <TextInput style={styles.registerTitle}
                                editable={false}
                            >Edit Profile</TextInput>
                            <View style={styles.editProfileForm}>
                                <View style={styles.imagecontainer}>

                                    <Image
                                        source={
                                            imageUri
                                                ? { uri: imageUri.localUri }
                                                : require("../assets/default-profile-image.png")
                                        }
                                        style={{ width: 70, height: 70 }}
                                    />
                                    <Button
                                /* style={styles.imageUpload} */ title="select image"
                                        onPress={selectImage}
                                    />
                                </View>

                                <View style={styles.inputsContainer}>
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


                                    {user.role === "ARTIST" ?
                                        <TextInput
                                            placeholder=' Music Tags (Rock, Jazz, punk, etc)'
                                            style={styles.inputsSignUp}
                                            placeholderTextColor="#343a40"
                                            onChangeText={tags => setTags(tags ? tags.split(',') : "")}
                                            defaultValue={user.tags ? user.tags : ''}
                                        >
                                        </TextInput>
                                        : <TextInput
                                            onChangeText={tags => setTags(tags.trim() ? tags.split(', ') : "")}
                                            defaultValue={user.tags ? ' ' + user.tags : ''}
                                        >
                                        </TextInput>}



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
                                        multiline={true}
                                        maxLength={200}
                                        style={styles.descriptionSignUp}
                                        placeholderTextColor="#343a40"
                                        onChangeText={description => setDescription(description)}
                                        defaultValue={user.description ? ' ' + user.description : ""}
                                    >
                                    </TextInput>
                                </View>
                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity style={styles.editProfileButton}
                                        onPress={() => { onCancelEditProfile() }}>
                                        <Text style={styles.buttonText}>Cancel!</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.editProfileButton}
                                        onPress={() => { onEditProfile({ imageUri, fullname, artistName, city, tags, youtubeLink, bandcampLink, spotifyLink, description }) }}>
                                        <Text style={styles.buttonText}>Save!</Text>
                                    </TouchableOpacity>

                                </View>
                                <TouchableOpacity onPress={onLogOut}>
                                    <Image style={styles.logoutIcon} source={require('../assets/logout-icon.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    EditProfileContainer: {
        justifyContent: "space-around",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },


    goBackIcon: {
        width: 40,
        height: 20,
        // marginTop: "-5%"
    },

    editProfileForm: {
        marginTop: "30%",
        width: "75%",
        height: "50%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    registerTitle: {
        // marginTop: "-10%",
        marginBottom: "10%",
        fontSize: 35,
        borderBottomWidth: 5,
        borderColor: "purple",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    imagecontainer: {
        // marginRight: "90%",
        marginBottom: "40%",
        marginTop: "70%"
    },

    inputsContainer: {
        width: "100%",
        height: "30%",
        marginTop: "10%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    inputsSignUp: {
        marginBottom: "10%",
        fontSize: 20,
        width: "80%",
        height: "15%",
        borderBottomWidth: .5,
        borderColor: "purple",
        color: "#343a40"
    },

    descriptionSignUp: {
        // marginLeft: "5%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 50,
        width: "80%",
        borderWidth: 1,
        borderColor: "purple",
        color: "#343a40"
    },

    buttonsContainer: {
        marginTop: "70%",
        flexDirection: "row",

        alignSelf: "center",
    },

    editProfileButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        marginLeft: "10%",
        marginRight: "10%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "black",
        width: 132,
        height: 44
    },

    buttonText: {
        color: "white"
    },

    logoutIcon: {
        marginTop: "20%",
        marginLeft: "80%",
        width: 48,
        height: 48,
    },

})

export default EditPromoterProfileScreen;