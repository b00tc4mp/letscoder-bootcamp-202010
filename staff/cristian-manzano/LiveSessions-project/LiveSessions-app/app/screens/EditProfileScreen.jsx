import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onSignUp }) {
    const [ fullname, setFullname ] = useState('')
    const [ artistName, setArtistName ] = useState('')
    const [ city, setCity ] = useState('')
    const [ description, setDescription ] = useState('')
    
    return (
        <SafeAreaView>
        <KeyboardAvoidingView
    //   behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
    >
        <ScrollView>
            <View style={styles.formSignUp}>
                <View style={styles.signUpHeader}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
       
                </View>

                <TextInput
                    placeholder= "fullname"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40" 
                    onChangeText={artistName => setArtistName(artistName)}
                    value={artistName}>
                </TextInput>

                <TextInput
                    placeholder=" Artist Name"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={name => setName(name)}
                    name={name}
                     >
                </TextInput>

                <TextInput
                    placeholder=" City"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={city => setCity(city)}
                    >
                </TextInput>

                <TextInput
                    placeholder=" Description"
                    style={styles.descriptionSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={description => setDescription(description)}
                    >
                </TextInput>

                <TouchableOpacity style={styles.editProfileButton}
                onPress={ () => {onSignUp ({ fullname, artistName, city, description })}}>
                    <Text style={styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    formSignUp: {
        justifyContent: "space-evenly",
        //marginTop: "-15%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    signUpHeader: {
        backgroundColor: "gray",
        //marginTop: "-8%",
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