import React, { useState } from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


function SignUpScreen({ onSignUp }) {
    const[role,setRole]=useState('')

    const [ email, setEmail ] = useState('')
    const [ fullname, setFullname ] = useState('')
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


            <View style={styles.roleContainer}>
            <TouchableOpacity style={role==='ARTIST'?styles.roleImageClicked:styles.roleImage} onPress={(event)=>{
            event.preventDefault();
            
            setRole('ARTIST')
        }}>
            <Image style={styles.logo} source={require('../assets/artist-role-image.png')} 
            value={role}
            />
        </TouchableOpacity>
        <TouchableOpacity style={role==='PROMOTER'?styles.roleImageClicked:styles.roleImage} onPress={(event)=>{
            event.preventDefault();
            setRole('PROMOTER')
        }}>
           <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} 
            value={role}/>
        </TouchableOpacity>
            </View>

                <TouchableOpacity style={styles.signUpButton}
                onPress={ () => {onSignUp ({ email, fullname, password, role })}}>
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
        // marginTop: "-15%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    signUpHeader: {
        backgroundColor: "gray",
        // marginTop: "-8%",
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

    roleContainer: {
        display: "flex",
        flexDirection : "row",
        justifyContent: "center"
    },

    roleImage: {
        width: 50,
        height: 50,
        opacity:0.5,
        // opacity: 50,
        color: "red"
        
    },

    roleImageClicked: {
        width: 50,
        height: 50,
        opacity:0.8,
        color: "green"
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