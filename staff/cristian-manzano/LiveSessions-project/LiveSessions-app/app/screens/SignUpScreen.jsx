import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onSignUp }) {
    const [ email, setEmail ] = useState('')
    const [ artistName, setArtistName ] = useState('')
    const [ password , setPassword ] = useState('')
    
    return (
        <SafeAreaView>
        <KeyboardAvoidingView
      behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
    >
        <ScrollView>
            <View style={styles.formSignUp}>
                <View style={styles.signUpHeader}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />

                </View>

                <TextInput
                    placeholder=" Fullname"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40" 
                    onChangeText={artistName => setArtistName(artistName)}
                    value={artistName}>
                </TextInput>

                <TextInput
                    placeholder=" e-mail"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40" 
                    onChangeText={email => setEmail(email)}
                    email={email}>
                </TextInput>

                <TextInput
                    secureTextEntry={true}
                    placeholder=" Password"
                    style={styles.inputsSignUp}
                    placeholderTextColor="#343a40"
                    onChangeText={password => setPassword(password)}
                    value={password} >
                </TextInput>


                {/* Add the TextInput bellow on edit profice

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
                </TextInput> */}


                <TouchableOpacity style={styles.signUpButton}
                onPress={ () => {onSignUp ({ email, fullname, password })}}>
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
        marginTop: "-15%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    signUpHeader: {
        backgroundColor: "gray",
        marginTop: "-8%",
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

    // descriptionSignUp: {
    //     marginLeft: "5%",
    //     width: "90%",
    //     height: "25%",
    //     borderWidth: 1,
    //     borderColor: "white",
    //     color: "white"
    // },

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