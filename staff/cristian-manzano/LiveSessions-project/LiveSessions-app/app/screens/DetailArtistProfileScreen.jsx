import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Dimensions, FlatList, ScrollView, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { LogBox } from 'react-native';


function DetailArtistProfileScreen({ onGoToPetitions, item }) {


    const itemId = item._id
    const imageURL = `http://192.168.1.131:4000/api/users/${itemId}/images`

    if (item.role === 'ARTIST')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={styles.artistProfileHeader}>
                        <View>
                            
                                <Image style={styles.profileAvatar}
                                    source={{ uri: `${imageURL}` }}
                                />
                                <Text style={styles.roleText}>Artist</Text>
                            

                            <TextInput
                                style={styles.artistName}
                                placeholder={'@' + item.artistName}
                                placeholderTextColor={"green"}
                                editable={false}>


                            </TextInput>
                            <TouchableOpacity onPress={onGoToPetitions}>
                                <Text>Send Live Petition</Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.artistProfileBody}>

                            <View style={styles.linkContainer}>

                                <View style={styles.findMeContainer}>
                                    <Text style={styles.findMeText}>Find me on: </Text>
                                    <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                </View>

                                <TouchableOpacity onPress={() => Linking.openURL(item.youtubeLink)}>
                                    <Image style={styles.links} source={require('../assets/youtube-icon_2.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL(item.bandcampLink)}>
                                    <Image style={styles.links} source={require('../assets/bandcamp-icon_2.png')} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => Linking.openURL(item.spotifyLink)}>
                                    <Image style={styles.links} source={require('../assets/spotify-icon_2.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
}

const styles = StyleSheet.create({

    containerNavigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "black",
        marginTop: 15,
        marginRight: 5

    },

    PetitionsIcon: {
        backgroundColor: "gray",
        marginTop: "30%",
        width: 40,
        height: 40

    },


    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        marginLeft: "10%",
        borderWidth: 3,
        borderColor: "green"
    },

    roleText: {
        textAlign: "center",
        marginTop: "6%",
        marginLeft: "-15%",
        // marginBottom: "-1%",
        fontSize: 7,
        fontFamily: "Roboto-Light",
        // borderBottomWidth: 2
    },

    artistName: {
        textAlign: "center",
        marginTop: "3%",
        fontFamily: "Roboto-Light",
        fontSize: 10,

    },


    petitionsButtonContainer: {
        marginTop: "43%",
        borderTopWidth: 4,
        width: "100%",
        height: 44,
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center",

    },


    petitionsButton: {
        fontSize: 25,
        fontFamily: "Roboto-Light",
        marginTop: "15%",
        textAlign: "center",
        height: 40,
        borderRadius: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "15%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "purple",
        backgroundColor: "lightgray",
        width: 132,
        height: 44
    },


    artistProfileContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    artistProfileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
    },

    artistProfileBody: {
        marginTop: "8%",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        // shadowColor: "gray",
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,

        // elevation: 24,
    },

    linkContainer: {
        marginTop: "30%",
        alignItems: "center",
    },


    findMeContainer: {
        flexDirection: "row"
    },

    findMeText: {
        marginRight: "5%",
        fontFamily: "Roboto_Regular400",
        fontSize: 25
    },

    instagramLogo: {
        width: 30,
        height: 30,
    },

    links: {
        marginTop: "8%",
        width: 200,
        height: 60,
    },

    livesListContainer: {
        height: "70%",
        width: Dimensions.get("window").width,
    },

    livesListHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        marginTop: "15%"
    },

    livesList: {
        marginTop: "10%",
        width: "90%",
        height: "80%"
    }

})

export default DetailArtistProfileScreen;