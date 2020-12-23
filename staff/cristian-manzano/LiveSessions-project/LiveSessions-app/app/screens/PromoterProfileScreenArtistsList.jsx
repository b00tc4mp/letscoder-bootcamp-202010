import React, { useState, useEffect } from 'react';
import ArtistsCard from "./ArtistsCard";
import { View, StyleSheet, Image, Dimensions, FlatList, ScrollView, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';
import { LogBox } from 'react-native';


function PromoterProfileScreenArtistsList({ onSearch, user, users, onGoToArtistProfile, onGoBack }) {
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedList: missing keys for items']);
    }, [])


    const [query, setQuery] = useState('')
    const userId = user.id
    const imageURL = `http://192.168.1.131:4000/api/users/${userId}/images`


    if (user.role === 'PROMOTER')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={styles.artistProfileHeader}>
                        <View>
                            <TouchableOpacity onPress={onGoBack}>
                                <Image style={styles.profileAvatar}
                                    source={{ uri: `${imageURL}` }}
                                />
                                <Text style={styles.roleText}>PROMOTER</Text>
                            </TouchableOpacity>

                            <TextInput
                                style={styles.artistName}
                                placeholder={'@' + user.artistName}
                                placeholderTextColor={"purple"}
                                editable={false}>


                            </TextInput>
                        </View>

                        <View style={styles.containerNavigation}>

                            <View style={styles.containerInputSearch}>
                                <TextInput
                                    placeholder=" Search artists by genres"
                                    style={styles.inputSearchActivity}
                                    onChangeText={query => setQuery(query)}

                                />
                                <TouchableOpacity
                                    onPress={() => { onSearch({ query }) }}>


                                    <View style={styles.searchContainer}>
                                        <Image
                                            style={styles.searchIcon}
                                            source={require("../assets/search-icon.png")}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.livesListContainer}>
                        <TextInput style={styles.registerTitle}
                                editable={false}
                            >Artists</TextInput>

                            <FlatList
                                style={styles.ArtistList}
                                data={users}
                                keyExtractor={users.id}
                                renderItem={({ item }) => (

                                    <TouchableOpacity onPress={() => { onGoToArtistProfile({ item }) }}>
                                        <ArtistsCard
                                            artistName={item.artistName}
                                            tags={item.tags}
                                            image={{ uri: `http://192.168.1.131:4000/api/users/${item._id}/images` }}
                                        />
                                    </TouchableOpacity>

                                )}
                            />
                        </View>

                        <View style={styles.artistProfileBody}>

                            <View style={styles.linkContainer}>

                                <View style={styles.findMeContainer}>
                                    <Text style={styles.findMeText}>Find me on: </Text>
                                    <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                </View>

                                <TouchableOpacity onPress={() => Linking.openURL(user.youtubeLink)}>
                                    <Image style={styles.links} source={require('../assets/youtube-icon_2.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                            <TouchableOpacity onPress={onGoBack}>
                            <Image
                                style={styles.goBackIcon}
                                source={require("../assets/Arrow_Back.png")}
                            />
                        </TouchableOpacity>

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

    },

    containerInputSearch: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginLeft: "10%"
    },
    inputSearchActivity: {
        backgroundColor: "white",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderWidth: 1,
        borderColor: "purple",
        borderRightColor: "white",
        fontFamily: "Roboto-Light",
        height: 48,
        width: 200,
        paddingLeft: 20,
    },
    logoutIcon: {
        marginTop: "20%",
        width: 48,
        height: 48,
    },

    registerTitle: {
        marginTop: "10%",
        marginBottom: "5%",
        fontSize: 35,
        fontFamily: "Roboto_Regular400",
        borderBottomWidth: 5,
        borderColor: "purple",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    searchContainer: {
        backgroundColor: "white",
        width: 50,
        height: 48,
        alignContent: "center",
        justifyContent: "center",
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderWidth: 1,
        borderColor: "purple",
        borderLeftColor: "white",

        alignItems: "center",
    },
    searchIcon: {
        width: 20,
        height: 20,
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center"
    },


    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        marginLeft: "10%",
        borderWidth: 3,
        borderColor: "purple"
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
        fontSize: 10,
        fontFamily: "Roboto-Light",
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
    },

    goBackIcon: {
        width: 40,
        height: 20,
        marginTop: "5%",
    },

})

export default PromoterProfileScreenArtistsList;