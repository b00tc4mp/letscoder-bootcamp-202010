import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ImageBackground } from 'react-native';


function SignUpScreen({ onSignUp, onGoToSignUp, onGoToSignIn }) {
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
                            <View style={styles.signUpHeader}>
                            <TouchableOpacity onPress={onGoToSignUp}>
                            <View style={{borderBottomWidth: 5, borderBottomColor: "purple", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, marginRight: "17%", marginLeft: "15%", borderBottomWidth: 5, borderTopColor: "purple", borderTopRightRadius: 10, borderTopLeftRadius: 10, borderTopWidth: 5}}>
                            <Text style={styles.registerTitle}
                                editable={false}
                            >Sign Up</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onGoToSignIn}>
                                <View style={{borderBottomWidth: 5, borderBottomColor: "purple", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, marginLeft: "20%", marginRight: "15%", borderTopColor: "purple", borderTopRightRadius: 10, borderTopLeftRadius: 10, borderTopWidth: 5}}>
                            <Text style={styles.logInTitle}
                                editable={false}
                            >Log in</Text>
                                </View>
                            </TouchableOpacity>
                            </View>

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
                                    
                                    role !== 'ARTIST' && setRole('ARTIST')
                                }}>
                                    <Image style={styles.logo} source={require('../assets/artist-role-image.png')}
                                        value={role}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={role === 'PROMOTER' ? styles.roleImageClicked : styles.roleImage} onPress={(event) => {
                                    event.preventDefault();
                                    role !== 'PROMOTER' && setRole('PROMOTER')
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
        width: 40,
        height: 40,
    },

    SignUpForm: {
        marginTop: "30%",
        width: "75%",
        height: "50%",
        alignSelf: "center",
        justifyContent: "center",
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },

    signUpHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },

    registerTitle: {
        fontFamily: "Roboto_Regular",
        fontSize: 30,
        borderBottomWidth: 5,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    logInTitle: {
        fontFamily: "Roboto_Regular",
        fontSize: 30,
        borderBottomWidth: 5,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        opacity: .2
    },

    inputsContainer: {
        width: "100%",
        fontFamily: "Roboto_Light",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",

    },


    inputsSignUp: {
        marginBottom: "10%",
        fontFamily: "Roboto_Light",
        fontSize: 20,
        width: "80%",
        height: "15%",
        borderBottomWidth: .5,
        borderColor: "#343a40",
        color: "#343a40"
    },

    roleContainer: {
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
        color: "red"

    },

    roleImageClicked: {
        marginLeft: "10%",
        marginRight: "10%",
        width: 70,
        height: 70,
        opacity: 1,
        color: "green"
    },

    signUpButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "black",
        width: 132,
        height: 44
    },
    buttonText: {
        fontFamily: "Roboto_Light",
        color: "white"
    },
})

export default SignUpScreen;