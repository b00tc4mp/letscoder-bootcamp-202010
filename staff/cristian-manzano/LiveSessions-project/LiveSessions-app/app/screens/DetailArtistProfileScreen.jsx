import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, Linking, ScrollView, SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";

export default function DetailLivesScreen({ onGoToPetitions, onGoBack, item }) {
    const artistName = item.artistName
    const email = item.email
    const city = item.city
    const tags = item.tags
    const description = item.description

    const itemId = item._id
    const imageURL = `http://192.168.1.131:4000/api/users/${itemId}/images`

    return (
        <SafeAreaView style={styles.artistProfileContainer}>

            <ScrollView>
                <View style={{
                    // backgroundColor: "#f8f4f4",
                    paddingHorizontal: 20,

                }}>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={onGoBack}>
                            <Image
                                style={styles.goBackIcon}
                                source={require("../assets/Arrow_Back.png")}
                            />
                        </TouchableOpacity>

                        <View style={{ borderBottomWidth: "4", borderBottomColor: "purple", width: 200, alignSelf: "center", fontFamily: "Roboto_Regular400" }}>
                            <Text style={styles.registerTitle}>Artist Detail</Text>
                        </View>
                        <View style={styles.card}>
                            <Image style={styles.liveImage}
                                source={{ uri: `${imageURL}` }}
                            />
                            <View style={styles.detailsContainer}>

                                <Text style={styles.subTitleActivity}>Name: {artistName}</Text>
                                <Text style={styles.subTitleActivity}>email: {email}</Text>
                                <Text style={styles.subTitleActivity}>city: {city}</Text>
                                <Text style={styles.subTitleActivity}>Genre: {tags}</Text>
                                <Text style={styles.subTitleActivity}>Description:</Text>
                                <Text style={styles.subTitleActivity}>{description}</Text>


                                <View style={styles.linkContainer}>

                                    <View style={styles.findMeContainer}>
                                        <Text style={styles.findMeText}>Find me on: </Text>

                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: "3%" }}>

                                        <TouchableOpacity onPress={() => Linking.openURL(`https://www.instagram.com/${item.artistName}/`)}>
                                            <Image style={styles.instagramLogo} source={require('../assets/instagram-logo.png')} />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => Linking.openURL(item.youtubeLink)}>
                                            <Image style={styles.links} source={require('../assets/youtube-logo.png')} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: "row", marginTop: "3%" }}>
                                        <TouchableOpacity onPress={() => Linking.openURL(item.bandcampLink)}>
                                            <Image style={styles.links} source={require('../assets/bandcamp-logo.png')} />
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => Linking.openURL(item.spotifyLink)}>
                                            <Image style={styles.links} source={require('../assets/spotify-icon_2.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.petitionsButton} onPress={onGoToPetitions}>
                                    <Text style={styles.buttonText}>Send Live Petition</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ paddingBottom: 50 }}></View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    artistProfileContainer: {
        justifyContent: "flex-start",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    card: {
        borderRadius: 15,
        backgroundColor: "#fff",
        marginTop: 38,
        marginBottom: 10,
        overflow: "hidden",
        width: "80%",
        alignSelf: "center"

        // flexDirection: "row"
    },

    goBackIcon: {
        width: 40,
        height: 20,
        marginTop: "-5%"
    },

    registerTitle: {
        marginTop: "10%",
        marginBottom: "5%",
        fontSize: 20,
        fontFamily: "Roboto_Regular400",
        borderBottomWidth: 5,
        borderColor: "purple",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        marginBottom: 7,
        fontSize: 25,
        fontFamily: "Roboto_Regular400",
    },

    subTitleActivity: {
        // color: "green",
        fontWeight: "bold",
        fontFamily: "Roboto-Light",
        marginRight: 20,
        marginTop: 10
    },

    liveImage: {
        width: "100%",
        height: 200,
    },

    detailsContainer: {
        padding: 20
    },

    linkContainer: {
        marginTop: "10%",
        alignItems: "center",

        paddingBottom: 100
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
        width: 50,
        height: 50,
        marginTop: "5%",
        marginLeft: "27%"
    },

    links: {
        marginLeft: "25%",
        marginTop: "5%",
        flexDirection: "row",
        width: 60,
        height: 50,

    },

    acceptAndDenieButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch"
    },

    livesButtons: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "15%",
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "black",
        width: 88,
        height: 38
    },

    modifyLivesButtons: {
        // marginLeft: "20%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "15%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "black",
        width: 132,
        height: 44
    },

    registerTitle: {
        // marginBottom: "10%",
        // marginRight: "30%",
        fontSize: 32,
        fontFamily: "Roboto_Regular400",
        borderBottomWidth: 5,
        borderColor: "black",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        // opacity: .2
    },

    petitionsButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-30%",
        borderRadius: 5,
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "black",
        width: 132,
        height: 44
    },

    buttonText: {
        color: "white",
        fontFamily: "Roboto-Light",
    },

});