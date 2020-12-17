import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onSignUp }) {
    const [role, setRole] = useState('')

    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setTimeout(() => {
            <Image source={require('../assets/signUp-background-image-timeOut.png')}
                style={{ width: 150, height: 170, borderRadius: 60 / 2 }} />;
        }, 5000)
    }, [])
    
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
                >
                <ScrollView>
                    <View style={styles.SignUpContainer}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />


                        <View style={styles.SignUpForm}>

                            <View style={styles.inputsContainer}>
                                <TextInput
                                    placeholder=" Fullname"
                                    style={styles.inputsSignUp}
                                    placeholderTextColor="#343a40"
                                    onChangeText={fullname => setFullname(fullname)}
                                    value={fullname}>
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
                            </View>


                            <View style={styles.roleContainer}>
                                <TouchableOpacity style={role === 'ARTIST' ? styles.roleImageClicked : styles.roleImage} onPress={(event) => {
                                    event.preventDefault();

                                    setRole('ARTIST')
                                }}>
                                    <Image style={styles.logo} source={require('../assets/artist-role-image.png')}
                                        value={role}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={role === 'PROMOTER' ? styles.roleImageClicked : styles.roleImage} onPress={(event) => {
                                    event.preventDefault();
                                    setRole('PROMOTER')
                                }}>
                                    <Image style={styles.logo} source={require('../assets/promoter-role-image.png')}
                                        value={role} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.signUpButton}
                                onPress={() => { onSignUp({ email, fullname, password, role }) }}>
                                <Text style={styles.buttonText}>Sign Up!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SignUpContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    logo: {
        marginTop: "5%",
        width: 50,
        height: 50,
    },

    SignUpForm: {
        marginTop: "25%",
        width: "75%",
        height: "50%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: .5,
        borderColor: "#343a40",
        borderRadius: 40,
        backgroundColor: "white",
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },

    inputsContainer: {
        width: "100%",
        // marginTop: "20%",
        // height: "50%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",

    },


    inputsSignUp: {
        marginBottom: "10%",
        fontSize: 20,
        width: "80%",
        height: "15%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40"
    },

    roleContainer: {
        // marginTop: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    roleImage: {
        width: 50,
        height: 50,
        opacity: 0.4,
        // opacity: 50,
        color: "red"

    },

    roleImageClicked: {
        width: 50,
        height: 50,
        opacity: 0.9,
        color: "green"
    },

    signUpButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
        borderWidth: 1,
        backgroundColor: "gray",
        width: 88,
        height: 44
    }
})

export default SignUpScreen;