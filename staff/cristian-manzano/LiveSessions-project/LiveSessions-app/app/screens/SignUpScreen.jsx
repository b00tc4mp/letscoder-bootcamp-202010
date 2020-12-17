import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ImageBackground } from 'react-native';


function SignUpScreen({ onSignUp }) {
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')



    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
            >
                <ScrollView>

                    <View style={styles.SignUpContainer}>
                        <Image style={styles.logo} source={require('../assets/logo.png')} />


                        <View style={styles.SignUpForm}>

                            <TextInput style={styles.registerTitle}
                                editable={false}
                            >Register</TextInput>

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
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoCompleteType='email'
                                    style={styles.inputsSignUp}
                                    placeholderTextColor="#343a40"
                                    onChangeText={email => setEmail(email)}
                                    email={email}>
                                </TextInput>

                                <TextInput
                                    secureTextEntry={true}
                                    onSubmitEditing={() => { onSignUp({ email, fullname, password, role }) }}
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
    background: {
        flex: 1,
    },
    SignUpContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    logo: {
        // marginTop: "5%",
        width: 40,
        height: 40,
    },

    SignUpForm: {
        marginTop: "30%",
        width: "75%",
        height: "50%",
        alignSelf: "center",
        justifyContent: "center",
        // backgroundColor: "white",
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },

    registerTitle: {
        marginTop: "-10%",
        marginBottom: "10%",
        fontSize: 35,
        borderBottomWidth: 5,
        borderColor: "lightgray",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    inputsContainer: {
        width: "100%",

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
        borderColor: "#343a40",
        color: "#343a40"
    },

    roleContainer: {
        // marginTop: "60%",
        marginBottom: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    roleImage: {
        marginLeft: "10%",
        marginRight: "10%",
        width: 70,
        height: 70,
        opacity: 0.4,
        // opacity: 50,
        color: "red"

    },

    roleImageClicked: {
        width: 70,
        height: 70,
        opacity: 0.9,
        color: "green"
    },

    signUpButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        borderWidth: 1,
        backgroundColor: "gray",
        width: 132,
        height: 44
    }
})

export default SignUpScreen;