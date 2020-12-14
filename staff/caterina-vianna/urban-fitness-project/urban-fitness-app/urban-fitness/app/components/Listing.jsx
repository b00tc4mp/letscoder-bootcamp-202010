import React from "react";
import Card from "./Card";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function Listing({ activities, onListingDetails }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={activities}
        keyExtractor={activities.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              onListingDetails({ item });
            }}
          >
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={require("../assets/yoga.jpg")}
            />
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}
