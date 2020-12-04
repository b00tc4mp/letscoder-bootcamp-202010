import React from 'react';
import { View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function ProfileScreen({onGoToEditProfile}) {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView
        //behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <ScrollView>

        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <TouchableOpacity onPress={onGoToEditProfile}>
        <Avatar.Image size={100} source={require('../assets/default-profile-image.png')} />
        </TouchableOpacity>


    </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
      
    );
}

const styles = StyleSheet.create({
        logo: {
        width: 50,
        height: 50,
    },
})

export default ProfileScreen;