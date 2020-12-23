import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";

import { Alert, Button, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


export default function PetitionScreen({ onModifyLive, onGoBack, live }) {

    const [title, setTitle] = useState(live.title)
    const [liveDate, setLiveDate] = useState(live.liveDate)
    const [duration, setDuration] = useState(live.duration)
    const [description, setDescription] = useState(live.description)
    const [payment, setPayment] = useState(live.payment)
    const liveId = live._id

    const [imageUri, setImageUri] = useState();

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library");
    };
    useEffect(() => {
        requestPermission();
    }, []);

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) setImageUri({ localUri: result.uri });
        else console.log("Error reading image");
    };

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
            >
                <ScrollView >

                    <View style={styles.LivePetitionContainer}>
                        <TouchableOpacity onPress={onGoBack}>
                            <Image
                                style={styles.goBackIcon}
                                source={require("../assets/Arrow_Back.png")}
                            />
                        </TouchableOpacity>

                        <View style={styles.liveEditForm}>
                            <View style={styles.inputsContainer}>
                                <View style={styles.imagecontainer}>

                                    <Image
                                        source={
                                            imageUri
                                                ? { uri: imageUri.localUri }
                                                : require("../assets/default-profile-image.png")
                                        }
                                        style={{ width: 150, height: 150 }}
                                    />
                                    <Button
                            /* style={styles.imageUpload} */ title="select image"
                                        onPress={selectImage}
                                    />
                                </View>
                                <TextInput
                                    placeholder=' Title'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={title => setTitle(title)}
                                    defaultValue={(live.title ? ' ' + live.title : '')}
                                >
                                </TextInput>

                                <TextInput
                                    placeholder=' Date'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={liveDate => setLiveDate(liveDate)}
                                    defaultValue={(live.liveDate ? ' ' + live.liveDate : '')}
                                >
                                </TextInput>

                                <TextInput
                                    placeholder=' Duration'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={duration => setDuration(duration)}

                                    defaultValue={(live.duration ? ' ' + live.duration : '')}
                                >
                                </TextInput>


                                <TextInput
                                    placeholder=' Payment'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={payment => setPayment(payment)}

                                    defaultValue={(live.payment ? ' ' + live.payment : '')}
                                >
                                </TextInput>

                                <TextInput
                                    placeholder=' Description'
                                    style={styles.descriptionLive}
                                    multiline={true}
                                    maxLength={200}
                                    placeholderTextColor="#343a40"
                                    onChangeText={description => setDescription(description)}

                                    defaultValue={(live.description ? ' ' + live.description : '')}
                                >
                                </TextInput>

                                <View style={styles.buttonsContainer}>
                                    <TouchableOpacity style={styles.submitPetitionButton}
                                        onPress={() => { onCancelEditProfile() }}>
                                        <Text style={styles.buttonText}>Cancel!</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.submitPetitionButton}
                                        onPress={() => { onModifyLive({ imageUri, liveId, title, liveDate, duration, payment, description }) }}>
                                        <Text style={styles.buttonText}>Save!</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    LivePetitionContainer: {
        // justifyContent: "space-around",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    goBackIcon: {
        marginTop: "5%",
        width: 40,
        height: 20,
        // marginTop: "-5%"
    },

    liveEditForm: {
        marginTop: "30%",
        width: "75%",
        height: "50%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    registerTitle: {
        // marginTop: "-10%",
        // marginBottom: "10%",
        fontSize: 35,
        fontFamily: "Roboto_Regular400",
        borderBottomWidth: 5,
        borderColor: "purple",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    imagecontainer: {
        // marginRight: "90%",
        // marginBottom: "80%",
        // marginTop: "70%"
    },

    inputsContainer: {
        width: "100%",
        height: "30%",
        // marginTop: "10%",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },

    livesInputs: {
        marginBottom: "10%",
        fontSize: 20,
        fontFamily: "Roboto-Light",
        width: "80%",
        height: "15%",
        borderBottomWidth: .5,
        borderColor: "purple",
        color: "#343a40"
    },

    descriptionLive: {
        // marginLeft: "5%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 50,
        borderWidth: 1,
        borderColor: "purple",
        color: "#343a40",
        fontFamily: "Roboto-Light",
    },

    buttonsContainer: {
        marginTop: "10%",
        flexDirection: "row",

        alignSelf: "center",
    },

    submitPetitionButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        // marginTop: "15%",
        marginLeft: "10%",
        marginRight: "10%",
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
})

