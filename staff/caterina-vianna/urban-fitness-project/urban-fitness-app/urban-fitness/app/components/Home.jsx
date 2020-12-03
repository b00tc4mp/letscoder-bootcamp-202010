import React, {
  useEffect,
  TouchableOpacity,
  useReducer,
  useState,
} from "react";
import {
  Alert,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
} from "react-native";
import { retrieveUser } from "../logic";

export default function Home({ token }) {
  const [name, setName] = useState();

  useEffect((token) => {
    debugger;
    try {
      retrieveUser(token, (error, user) => {
        if (error) return alert(error.message);
        debugger;
        const { firstName } = user;
        setName(firstName);
      });
    } catch (error) {
      alert(error.message);
    }
  });
  return (
    <View>
      <View>
        <Text style={styles.textToken}>{token}</Text>
        <Text style={styles.textToken}>{name}</Text>
      </View>
    </View>
  );

  // <View styles={styles.backgroundHome}>
  //   <Text>Helloo</Text>
  //   <Text styles={styles.textToken}>{token}</Text>
  // </View>
}
const styles = StyleSheet.create({
  backgroundHome: {
    backgroundColor: "blue",
  },
  textToken: {
    color: "pink",
  },
  customBtnText: {
    fontSize: 15,
    fontWeight: "400",
    color: "#000000",
    textAlign: "center",
  },

  /* Here, style the background of your button */
  customBtnBG: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    marginRight: 60,
    marginLeft: 60,
    marginTop: 60,
  },
});
