import React from 'react';
import { Alert, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";


function LogOutScreen(onLogOut) {



    return (
    <TouchableOpacity style={styles.signUpButton}
                onPress={ () => {onLogOut}}>
                    <Text style={styles.buttonText}>Log Out!</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    
})

export default LogOutScreen;