import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ImageBackground } from 'react-native';


function SignInScreen({ onSignIn, onGoToSignUp, onGoToSignIn }) {
    const [email, setEmail] = useState('')
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
                                    <View style={{ borderBottomWidth: 5, borderBottomColor: "purple", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, marginRight: "20%", marginLeft: "15%", borderBottomWidth: 5, borderTopColor: "purple", borderTopRightRadius: 10, borderTopLeftRadius: 10, borderTopWidth: 5 }}>
                                        <Text style={styles.registerTitle}
                                            editable={false}
                                        >Sign Up</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={onGoToSignIn}>
                                    <View style={{borderBottomWidth: 5, borderBottomColor: "purple", borderBottomRightRadius: 10, borderBottomLeftRadius: 10, marginRight: "20%", marginLeft: "15%", borderBottomWidth: 5, borderTopColor: "purple", borderTopRightRadius: 10, borderTopLeftRadius: 10, borderTopWidth: 5}}>
                                        <Text style={styles.logInTitle}
                                            editable={false}
                                        >Log in</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.inputsContainer}>

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
                            <TouchableOpacity style={styles.signUpButton}
                                onPress={() => { onSignIn({ email, password }) }}>
                                <Text style={styles.buttonText}>Sign In!</Text>
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
        marginTop: "5%",
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
        opacity: .2
    },

    logInTitle: {
        fontFamily: "Roboto_Regular",
        fontSize: 30,
        borderBottomWidth: 5,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        // opacity: .2
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
        fontFamily: "Roboto-Light",
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
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "black",
        width: 132,
        height: 44,
    },

    buttonText: {
        color: "white",
        fontFamily: "Roboto-Light",
    },
})

export default SignInScreen;