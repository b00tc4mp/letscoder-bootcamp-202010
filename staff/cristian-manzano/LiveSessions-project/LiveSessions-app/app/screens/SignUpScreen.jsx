import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onSignUp }) {
    const [ email, setEmail ] = React.useState('')
    const [ name, setName ] = React.useState('')
    const [ lastName, setLastName ] = React.useState('')
    const [ artistName, setArtistName ] = React.useState('')
    const [ password , setPassword ] = React.useState('')
    const [ city, setCity ] = React.useState('')
    const [ description, setDescription ] = React.useState('')
    
    return (
        <SafeAreaView>
        <KeyboardAvoidingView
      behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
    >
        <ScrollView>
            <View style={styles.formSignUp}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />

                <TextInput
                    placeholder=" e-mail"
                    style={styles.inputsSignUp}
                    placeholderTextColor="white" 
                    onChangeText={email => setEmail(email)}
                    email={email}>
                </TextInput>

                <TextInput
                    placeholder=" Name"
                    style={styles.inputsSignUp}
                    placeholderTextColor="white"
                    onChangeText={name => setName(name)}
                    name={name}
                     >
                </TextInput>

                <TextInput
                    placeholder=" Last Name"
                    style={styles.inputsSignUp}
                    placeholderTextColor="white"
                    onChangeText={lastName => setLastName(lastName)}
                    value={lastName} >
                </TextInput>

                <TextInput
                    placeholder=" Artist Name"
                    style={styles.inputsSignUp}
                    placeholderTextColor="white" 
                    onChangeText={artistName => setArtistName(artistName)}
                    value={artistName}>
                </TextInput>

                <TextInput
                    secureTextEntry={true}
                    placeholder=" Password"
                    style={styles.inputsSignUp}
                    placeholderTextColor="white"
                    onChangeText={password => setPassword(password)}
                    value={password} >
                </TextInput>

                <TextInput
                    placeholder=" City"
                    style={styles.inputsSignUp}
                    placeholderTextColor="white"
                    onChangeText={city => setCity(city)}
                    value={city} >
                </TextInput>

                <TextInput
                    placeholder=" Description"
                    style={styles.descriptionSignUp}
                    placeholderTextColor="white"
                    onChangeText={description => setDescription(description)}
                    value={description} >
                </TextInput>


                <TouchableOpacity style={styles.signInButton}
                onPress={ () => {onSignUp ()}}>
                    <Text style={styles.buttonText}>Sign Up!</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
    },
    formSignUp: {
        justifyContent: "space-around",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    inputsSignUp: {
        marginLeft: "5%",
        width: "50%",
        height: "5%",
        borderWidth: 1,
        borderColor: "white",
        color: "white"
    },

    descriptionSignUp: {
        marginLeft: "5%",
        width: "90%",
        height: "25%",
        borderWidth: 1,
        borderColor: "white",
        color: "white"
    },

    signInButton: {
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