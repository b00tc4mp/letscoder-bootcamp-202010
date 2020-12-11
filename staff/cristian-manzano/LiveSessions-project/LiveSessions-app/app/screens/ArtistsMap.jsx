import React from "react";
import Card from "./Card";
import { FlatList, ScrollView, TouchableWithoutFeedback } from "react-native";

function Listing({ users }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={users}
        keyExtractor={users.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("hello");
            }}
          >
            <Card
              title={item.artistName}
              subTitle={item.tags}
              image={require('../assets/default-profile-image.png')}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </ScrollView>
  );
}