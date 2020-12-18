import React from "react";
import LivesCard from "./LivesCard";
import { FlatList, Dimensions, TouchableOpacity, StyleSheet, View, TextInput, Image } from "react-native";

export default function LivesMap({ lives, user, onGoToLiveDetail, onGoToProfile }) {
  return (

    <View style={styles.livesListContainer}>
      
      <FlatList style={styles.livesList}
        data={lives}
        keyExtractor={lives._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => { onGoToLiveDetail({ live: item }) }}>
            <LivesCard
              title={item.title}
              liveDate={item.liveDate}
              status={item.status}
              duration={item.duration}
              payment={item.payment}
              description={item.description}

            />
          </TouchableOpacity>
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

  livesList: {
    marginTop: "10%",
    width: "90%",
    height: "80%"
  }
});