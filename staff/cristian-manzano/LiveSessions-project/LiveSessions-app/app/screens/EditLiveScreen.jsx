import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";

import { Alert, Button, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


export default function PetitionScreen({ onModifyLive, live }) {
    const [title, setTitle] = useState(live.title)
    const [liveDate, setLiveDate] = useState(live.liveDate)
    const [duration, setDuration] = useState(live.duration)
    const [description, setDescription] = useState(live.description)
    const [payment, setPayment] = useState(live.payment)
    const liveId = live._id

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
            >
                <ScrollView>

                    <View style={styles.LivePetitionContainer}>
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
                            placeholder=' Description'
                            style={styles.livesInputs}
                            placeholderTextColor="#343a40"
                            onChangeText={description => setDescription(description)}

                            defaultValue={(live.description ? ' ' + live.description : '')}
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

                    <TouchableOpacity style={styles.submitPetitionButton}
                            onPress={() => { onModifyLive({ liveId, title, liveDate, duration, payment, description }) }}>
                            <Text style={styles.buttonText}>Save!</Text>
                    </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    LivePetitionContainer: {
        justifyContent: "space-evenly",
        // marginTop: "-15%",
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },

    livesInputs: {
        marginLeft: "5%",
        width: "50%",
        height: "5%",
        borderWidth: 1,
        borderColor: "#343a40",
        color: "#343a40"
    },

    submitPetitionButton: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        backgroundColor: "gray",
        width: "30%",
        height: "5%"
    }

})

