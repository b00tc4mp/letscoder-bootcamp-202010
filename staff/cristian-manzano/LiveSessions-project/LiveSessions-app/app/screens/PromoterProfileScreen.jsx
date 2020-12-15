import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function PromoterProfileScreen({ onGoToEditProfile, onGoToLives, onLogOut, onSearch, onGoToCreateEvent, user }) {
    const [ query, setQuery ] = useState('')
    const imageURL = `../../../LiveSessions-api/data/users/${user.id}.jpg`
    // const imageURL = `../assets/testImage.jpg`
    if (user.role === 'PROMOTER')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <ScrollView>

                            <View style={styles.artistProfileHeader}>
                                <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />
                                
                                <TextInput
                                    placeholder=' Search'
                                    style={styles.search}
                                    placeholderTextColor="#343a40" 
                                    onChangeText={query => setQuery(query)}>
                                </TextInput>
                                
                                <TouchableOpacity style={styles.searchButton}
                                    onPress={ () => {onSearch ({ query })}}>
                                        <Text style={styles.buttonText}>Search!</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={onLogOut}>
                                    <Image style={styles.logoutIcon} source={require('../assets/logout-icon.png')} />
                                </TouchableOpacity>

                            </View>

                            <View style={styles.artistProfileBody}>

                                <TouchableOpacity onPress={onGoToEditProfile}>
                                    <Image style={styles.profileAvatar} style={{ width: 75, height: 75 }} source={{uri:imageURL}} />
                                    <Text style={styles.artistName}>@{user.artistName}</Text>
                                </TouchableOpacity>

                                <View style={styles.linkContainer}>

                                    <View style={styles.findMeContainer}>
                                        <Text style={styles.findMeText}>Find me on: </Text>
                                        <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                    </View>

                                    <TouchableOpacity onPress={() => Linking.openURL(user.youtubeLink)}>
                                        <Image style={styles.links} source={require('../assets/youtube-icon_2.png')} />
                                    </TouchableOpacity>
                                </View>

                            <TouchableOpacity onPress={onGoToLives}>
                                <Text style={styles.petitionsButton}>Lives</Text>
                            </TouchableOpacity>

                            </View>

                            {/* <TouchableOpacity onPress={onGoToCreateEvent}>
                                <Text style={styles.petitionsButton}>Create Event :)</Text>
                            </TouchableOpacity> */}
                            
                            


                      
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60
    },

    logoutIcon: {
        marginTop: "30%",
        width: 40,
        height: 40
    },

    search: {
        marginTop: "15%",
        width: "50%",
        height: "20%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40"
    },

    searchButton: {
        marginTop: "15%",
        marginLeft: "-5%",
        width: "15%",
        height: "20%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40",
        alignItems: "center",
        justifyContent: "center"
    },

    

    profileAvatar: {
        backgroundColor: "gray"
    },

    petitionsButton: {
        fontSize: 25,
        marginTop: "15%",
        alignSelf: "stretch",
        textAlign: "center",
        height: 40,
        borderRadius: 50,
        justifyContent: "flex-end",
        color: "#343a40",
        shadowRadius: 50,
        borderWidth: 1
    },


    artistProfileContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    artistProfileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch"
    },

    artistProfileBody: {
        marginTop: "8%",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    linkContainer: {
        marginTop: "10%",
        alignItems: "center",

    },

    artistName: {
        textAlign: "center",
        marginTop: "3%",
        fontSize: 30
    },

    findMeContainer: {
        flexDirection: "row"
    },

    findMeText: {
        marginRight: "5%",

        fontSize: 25
    },

    instagramLogo: {
        width: 30,
        height: 30,
    },

    links: {
        marginTop: "15%",
        width: 200,
        height: 60,
    }

})

export default PromoterProfileScreen;