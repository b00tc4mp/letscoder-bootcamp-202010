import React from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function ProfileScreen({onGoToEditProfile, onGoToSearch, onGoToPetitions}) {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
        //behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <ScrollView>
        <View style={styles.editProfile}>

        <View style={styles.profileHeader}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <TouchableOpacity onPress={onGoToEditProfile}>
        <Avatar.Image size={100} source={require('../assets/default-profile-image.png')} />
        </TouchableOpacity>

        <View style={styles.navBar}>

        <TouchableOpacity onPress={onGoToSearch}>
        <Text style={styles.searchNavBar}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onGoToPetitions}>
        <Text style={styles.petitionsNavBar}>Petitions</Text>
        </TouchableOpacity>

        </View>

        </View>

    </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
        editProfile: {
            justifyContent: "space-around",
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
        },
        profileHeader: {
        backgroundColor: "gray",
        marginTop: "-7.5%",
        width: "100%",
        height: "10%",
        justifyContent: 'center',
        },
        
        logo: {
            width: 50,
            height: 50,
    },
    

    searchNavBar: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "30%",
        height: "5%" ,
    },

    petitionsNavBar: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "30%",
        height: "5%" 
    }
})

export default ProfileScreen;