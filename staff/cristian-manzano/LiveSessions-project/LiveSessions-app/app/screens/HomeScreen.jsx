import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { retrieveUser } from '../logic';
import LogOutScreen from './app/screens/LogOutScreen';


export default function Home({ token }) {
    const [name, setName] = useState()

    useEffect(() => { 
        try {
            retrieveUser(token, (error, user) => {
                if (error) return alert(error.message)

                const { fullname } = user

                setName(fullname)
            })
        } catch (error) {
            alert(error.message)
        }  
    })

    const handleLogOut = () => {
        storeData('')
    setView("sign-in")
  }

  return (
    <View>
      <Text style={styles.textName}>{token}</Text>;

    <LogOutScreen />

    </View>
    
  );

}
const styles = StyleSheet.create({
  backgroundHome: {
    backgroundColor: "blue",
  },
  textName: {
    color: "pink",
  },
});