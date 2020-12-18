import React, { useState, useEffect } from 'react';
import ArtistsCard from "./ArtistsCard";
import { LogBox } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity, Dimensions, View, StyleSheet, Image } from "react-native";

export default function ArtistMap({ users, onGoToArtistProfile, onGoToProfile }) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])
  return (
    <View>
      <View style={styles.livesListHeader}>

      </View>
      <ScrollView>
        <View style={styles.artistsListContainer}>
          <FlatList
            style={styles.ArtistList}
            data={users}
            keyExtractor={users.id}
            renderItem={({ item }) => (

              <TouchableOpacity onPress={() => { onGoToArtistProfile({ item }) }}>
                <ArtistsCard
                  artistName={item.artistName}
                  tags={item.tags}
                  image={{ uri: `http://192.168.1.131:4000/api/users/${item._id}/images` }}
                />
              </TouchableOpacity>

            )}
          />
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  artistsListContainer: {
    height: "70%",
    width: Dimensions.get("window").width,
  },

  artistsList: {
    marginTop: "10%",
    width: "90%",
    height: "80%"
  }
});