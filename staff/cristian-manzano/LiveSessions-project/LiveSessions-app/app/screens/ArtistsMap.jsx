import React from "react";
import ArtistsCard from "./ArtistsCard";
import { FlatList, ScrollView, TouchableOpacity, View, StyleSheet, Image} from "react-native";

export default function ArtistMap({ users, onGoToArtistProfile, onGoToProfile }) {
  const userId = item._id
  return (
    <View>
      <View style={styles.livesListHeader}>
            <TouchableOpacity onPress={onGoToProfile}>
              <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />
            </TouchableOpacity>       
        </View>
    
        <FlatList
          data={users}
          keyExtractor={users.id}
          renderItem={({ item }) => (
            
            <TouchableOpacity onPress={ () => {onGoToArtistProfile ({ item })}}>
              <ArtistsCard
                artistName={item.artistName}
                tags={item.tags}
                image= {{uri: `http://192.168.1.131:4000/api/users/${userId}/images`}}
              />
              </TouchableOpacity>
            
          )}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  
});