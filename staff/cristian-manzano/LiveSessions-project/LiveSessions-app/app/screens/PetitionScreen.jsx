import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Alert, Button, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


export default function PetitionScreen({ onSubmitPetition, onGoBack, user, item }) {
    const userId = user.id
    const imageURL = `http://192.168.1.131:4000/api/users/${userId}/images`

    const [title, setTitle] = useState(title)
    const [liveDate, setLiveDate] = useState(liveDate)
    const [duration, setDuration] = useState(duration)
    const [description, setDescription] = useState(description)
    const [payment, setPayment] = useState(payment)
    const [status, setStatus] = useState('PENDING')

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
            >
                <ScrollView >
                    

                    <View style={styles.LivePetitionContainer}>
                    <View style={styles.artistProfileHeader}>
                        <View>
                            
                                <Image style={styles.profileAvatar}
                                    source={{ uri: `${imageURL}` }}
                                />
                                <Text style={styles.roleText}>PROMOTER</Text>
                            

                            <TextInput
                                style={styles.artistName}
                                placeholder={'@' + user.artistName}
                                placeholderTextColor={"purple"}
                                editable={false}>

                            </TextInput>
                        </View>
                        <TouchableOpacity onPress={onGoBack}>
                            <Image
                                style={styles.goBackIcon}
                                source={require("../assets/close-window-icon.png")}
                            />
                        </TouchableOpacity>
                        </View>

                        <View style={styles.liveEditForm}>
                            <View style={styles.inputsContainer}>
                            <View style={styles.petitionTitle}>
                            <Text style={{fontSize: 20, fontFamily: "Roboto_Regular400"}}>Send Petition to {item.artistName}</Text>
                            </View>
                                <TextInput
                                    placeholder=' Title'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={title => setTitle(title)}
                                    
                                >
                                </TextInput>

                                <TextInput
                                    placeholder=' Date'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={liveDate => setLiveDate(liveDate)}
                                    
                                >
                                </TextInput>

                                <TextInput
                                    placeholder=' Duration'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={duration => setDuration(duration)}

                                    
                                >
                                </TextInput>


                                <TextInput
                                    placeholder=' Payment'
                                    style={styles.livesInputs}
                                    placeholderTextColor="#343a40"
                                    onChangeText={payment => setPayment(payment)}

                                    
                                >
                                </TextInput>

                                <TextInput
                                    placeholder=' Description'
                                    style={styles.descriptionLive}
                                    multiline={true}
                                    maxLength={200}
                                    placeholderTextColor="#343a40"
                                    onChangeText={description => setDescription(description)}

                                    
                                >
                                </TextInput>

                                    <TouchableOpacity style={styles.submitPetitionButton}
                                        onPress={() => { onSubmitPetition({ title, liveDate, status, duration, payment, description }) }}>
                                        <Text style={styles.buttonText}>Submit!</Text>
                                    </TouchableOpacity>
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
        marginLeft: "5%",
        width: 20,
        height: 20,
        // marginTop: "-5%"
    },

    artistProfileHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "stretch",
        marginLeft: 3
    },

    profileAvatar: {
        width: 50,
        height: 50,
        borderRadius: 60 / 2,
        // marginLeft: "10%",
        borderWidth: 3,
        borderColor: "purple",
        alignSelf: "center"
    },

    roleText: {
        textAlign: "center",
        fontFamily: "Roboto-Light",
        marginTop: "6%",
        // marginLeft: "-15%",
        // marginBottom: "-1%",
        fontSize: 7,
        alignSelf: "center"
        // borderBottomWidth: 2
    },

    artistName: {
        textAlign: "center",
        marginTop: "3%",
        fontFamily: "Roboto-Light",
        fontSize: 10,
    },

    petitionTitle: {
        marginTop: "-25%",
        marginBottom: "20%",
        fontSize: 35,
        fontFamily: "Roboto_Regular400",
        borderBottomWidth: 5,
        borderColor: "purple",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
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
        width: "80%"
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
        marginTop: "15%",
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

