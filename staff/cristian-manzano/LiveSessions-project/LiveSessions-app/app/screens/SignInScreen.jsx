import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onSignIn }) {
    const [ email, setEmail ] = useState('')
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


                <TouchableOpacity style={styles.signInButton}
                onPress={ () => {onSignIn ({ email, password })}}>
                    <Text style={styles.buttonText}>Sign In!</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.signInFooter}></View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    formSignUp: {
        justifyContent: "space-evenly",
        marginTop: "-25%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    signUpHeader: {
        backgroundColor: "#343a40",
        marginTop: "-10%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "10%",
    },

    logo: {
        width: 50,
        height: 50,
    },

    inputsSignUp: {
        marginLeft: "5%",
        marginBottom:"-20%",
        width: "50%",
        height: "5%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40"
    },

    signInButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "30%",
        height: "5%" 
    },

    signInFooter: {
        backgroundColor: "gray",
        width: "100%",
        height:  "20%",
    },
})

export default SignUpScreen;