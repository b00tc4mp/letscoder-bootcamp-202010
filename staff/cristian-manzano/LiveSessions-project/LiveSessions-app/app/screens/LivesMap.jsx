import React from "react";
import Card from "./Card";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";

export default function ArtistMap({ users, onGoToArtistProfile }) {
  return (
  
      <FlatList
        data={users}
        keyExtractor={users.id}
        renderItem={({ item }) => (
          
          <TouchableOpacity onPress={ () => {onGoToArtistProfile ({ item })}}>
            <Card
              artistName={item.artistName}
              tags={item.tags}
              image={require('../assets/default-profile-image.png')}
            />
            </TouchableOpacity>
          
        )}
      />
  );
}