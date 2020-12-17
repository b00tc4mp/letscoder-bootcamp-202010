import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, Text, TextInput, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Avatar } from 'react-native-paper';

function PromoterProfileScreen({ onGoToEditProfile, onGoToLives, onLogOut, onSearch, onGoToProfile, user }) {
    const [query, setQuery] = useState('')
    const userId = user.id
    const imageURL = `http://192.168.1.131:4000/api/users/${userId}/images`

    if (user.role === 'PROMOTER')
        return (

            <SafeAreaView style={styles.artistProfileContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <ScrollView>

                        <View style={styles.artistProfileHeader}>
                            <TouchableOpacity onPress={onGoToProfile}>
                                <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onLogOut}>
                                <Image style={styles.logoutIcon} source={require('../assets/logout-icon.png')} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerNavigation}>
                            <TouchableOpacity onPress={onGoToEditProfile}>
                                <Image style={styles.profileAvatar}
                                    source={{ uri: `${imageURL}` }}
                                    style={{ width: 50, height: 50, borderRadius: 60 / 2 }} />

                            </TouchableOpacity>
                            <View style={styles.containerInputSearch}>
                                <TextInput
                                    placeholder=" Search artists by genres"
                                    style={styles.inputSearchActivity}
                                    onChangeText={query => setQuery(query)}

                                />
                                <TouchableOpacity
                                    onPress={ () => {onSearch ({ query })}}>
                                    
                                
                                    <View style={styles.searchContainer}>
                                        <Image
                                            style={styles.searchIcon}
                                            source={require("../assets/search-icon.png")}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>




                        <View style={styles.artistProfileBody}>
                            <TextInput
                                style={styles.artistName}
                                placeholder={'@' + user.artistName}
                                editable={false}>

                            </TextInput>
                            <View style={styles.linkContainer}>

                                <View style={styles.findMeContainer}>
                                    <Text style={styles.findMeText}>Find me on: </Text>
                                    <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                </View>

                                <TouchableOpacity onPress={() => Linking.openURL(user.youtubeLink)}>
                                    <Image style={styles.links} source={require('../assets/youtube-icon_2.png')} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity 
                            style={styles.petitionsButtonContainer}
                            onPress={onGoToLives}>
                                <Text style={styles.petitionsButton}>Lives</Text>
                            </TouchableOpacity>

                        </View>

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



    containerNavigation: {
        marginTop: "8%",
        // marginLeft: "5%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // backgroundColor: "black",
        marginBottom: 20,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
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
        height: 48,
        width: 150,
        paddingLeft: 20,
    },
    logoutIcon: {
        marginTop: "20%",
        width: 48,
        height: 48,
    },
    searchContainer: {
        backgroundColor: "white",
        width: 50,
        height: 48,
        alignContent: "center",
        justifyContent: "center",
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,

        alignItems: "center",
    },
    searchIcon: {
        width: 30,
        height: 30,
        alignContent: "center",
        alignSelf: "center",
        justifyContent: "center"
    },


    profileAvatar: {
        borderRadius: 50
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
        alignSelf: "stretch",
        textAlign: "center",
        height: 40,
        borderRadius: 50,
        // borderWidth: 1,
        // justifyContent: "flex-end",
        color: "#343a40",
    
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        
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
        borderBottomWidth: 4,
        borderBottomColor: "#343a40"
    },

    artistProfileBody: {
        marginTop: "8%",
        alignItems: "center",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    linkContainer: {
        marginTop: "30%",
        alignItems: "center",


    },

    artistName: {
        textAlign: "center",
        marginTop: "10%",
        // marginBottom: "-1%",
        fontSize: 38,
        // borderBottomWidth: 2

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
        marginTop: "8%",
        width: 200,
        height: 60,
    }

})

export default PromoterProfileScreen;