import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function WelcomeScreen({ onGoToSignUp, onGoToSignIn }) {
    return (
        <View
            style={styles.background}
        // source={require('../assets/background.png')}
        >

            <Image style={styles.logo} source={require('../assets/logo.png')} />


            <Text style={styles.messageText}>Find your next live session</Text>

            <Image style={styles.welcomeImage} source={require('../assets/welcome-image-nirvana.png')} />

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.signInButton} onPress={onGoToSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton} onPress={onGoToSignUp}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "space-around",
    },
    
    logo: {
        marginTop: "-5%",
        width: 50,
        height: 50,
    },
    
    
    messageText: {
        fontSize: 25,
        color: "white",
        marginTop: "-30%",
        marginLeft: "15%",
    },
    
    welcomeImage: {
        width: "100%",
        marginTop: "-20%",
        height: 200,
    },

    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    
    signInButton: {
        width: '20%',
        height: 30,
        // borderWidth: .2,
        justifyContent: 'center',
        // borderColor: "purple"
    },





    introMessage: {
        marginTop: 10,
        padding: 20,

    },
    signUpButton: {
        width: '20%',
        height: 70,
    },
    buttonText: {
        fontSize: 20,
        color: "white",
    }
})

export default WelcomeScreen;