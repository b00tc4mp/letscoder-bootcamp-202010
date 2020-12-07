import React from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function ProfileScreen({onGoToEditProfile, onGoToSearch, onGoToPetitions, onLogOut, user}) {
    return (
        
        <SafeAreaView>
            <KeyboardAvoidingView
        //behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <ScrollView>
        {/* How to paint component if Artist or if Promoter
         {user.role === 'ARTIST' ? <Text>I'm an Artist</Text> : <Text>
            I'm not an Artist :( </Text>} */}
        <View style={styles.profileContainer}>

        <View style={styles.profileHeader}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>
        <TouchableOpacity onPress={onGoToEditProfile}>
        <Avatar.Image size={100} source={require('../assets/default-profile-image.png')} />
        <Text>{user.artistName}</Text>

        <TouchableOpacity onPress={() => Linking.openURL(user.youtubeLink)}>
            <Text>Youtube</Text>
        </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.navBar}>

        <TouchableOpacity onPress={onGoToSearch}>
        <Text style={styles.navBarButtons}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onGoToPetitions}>
        <Text style={styles.navBarButtons}>Petitions</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogOut}>
        <Text style={styles.navBarButtons}>Log Out!</Text>
        </TouchableOpacity>

        </View>

    </View>

    </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView> 
    );
}

const styles = StyleSheet.create({
        profileContainer: {
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
    

    navBarButtons: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "30%",
        height: "5%" ,
    },

})

export default ProfileScreen;