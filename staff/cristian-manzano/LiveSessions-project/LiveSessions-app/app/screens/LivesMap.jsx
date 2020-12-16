import React from "react";
import LivesCard from "./LivesCard";
import { FlatList, Dimensions, TouchableOpacity, StyleSheet, View, TextInput, Image } from "react-native";

export default function LivesMap({ lives, user }) {
  return (

    <View style={styles.livesListContainer}>
      <View style={styles.livesListHeader}>
        {user.role === "ARTIST" ?
          <Image style={styles.logo} source={require('../assets/artist-role-image.png')} />
          : <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />}
      </View>

      <FlatList style={styles.livesList}
        data={lives}
        keyExtractor={lives._id}
        renderItem={({ item }) => (

          <LivesCard
            title={item.title}
            liveDate={item.liveDate}
            status={item.status}
            duration={item.duration}
            payment={item.payment}
            description={item.description}
          />


        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  livesListContainer: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },

  livesListHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "stretch",
      marginTop: "15%"
  },

  logo: {
    width: 60,
    height: 60
},

  livesList: {
    marginTop: "10%",
    width: "90%",
    height: "70%"
  }
});