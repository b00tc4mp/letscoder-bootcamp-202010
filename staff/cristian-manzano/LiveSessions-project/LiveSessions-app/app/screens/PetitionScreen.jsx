import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";

import { Alert, Button, View, StyleSheet, Image, TextInput, Dimensions, ScrollView, Text, Linking, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';


export default function PetitionScreen({ onSubmitPetition }) {
    const [title, setTitle] = useState(title)
    const [date, setDate] = useState(date)
    const [duration, setDuration] = useState(duration)
    const [description, setDescription] = useState(description)
    const [payment, setPayment] = useState(payment)

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" && "android" ? "padding" : "height"}
            >
                <ScrollView>
                <TouchableOpacity onPress={onGoToProfile}>
                        <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />
                        </TouchableOpacity>
                    <View style={styles.LivePetitionContainer}>
                    <TextInput
                            placeholder=' Title'
                            style={styles.livesInputs}
                            placeholderTextColor="#343a40"
                            onChangeText={title => setTitle(title)}

                            // defaultValue={(title ? ' ' + title : '')}
                        >
                    </TextInput>

                    <TextInput
                            placeholder=' Date'
                            style={styles.livesInputs}
                            placeholderTextColor="#343a40"
                            onChangeText={date => setDate(date)}

                            // defaultValue={(date ? ' ' + date : '')}
                        >
                    </TextInput>

                    <TextInput
                            placeholder=' Duration'
                            style={styles.livesInputs}
                            placeholderTextColor="#343a40"
                            onChangeText={duration => setDuration(duration)}

                            // defaultValue={(duration ? ' ' + duration : '')}
                        >
                    </TextInput>

                    <TextInput
                            placeholder=' Description'
                            style={styles.livesInputs}
                            placeholderTextColor="#343a40"
                            onChangeText={description => setDescription(description)}

                            // defaultValue={(description ? ' ' + description : '')}
                        >
                    </TextInput>

                    <TextInput
                            placeholder=' Payment'
                            style={styles.livesInputs}
                            placeholderTextColor="#343a40"
                            onChangeText={payment => setPayment(payment)}

                            // defaultValue={(payment ? ' ' + payment : '')}
                        >
                    </TextInput>

                    <TouchableOpacity style={styles.submitPetitionButton}
                            onPress={() => { onSubmitPetition({ title, date, status, duration, payment, description }) }}>
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

