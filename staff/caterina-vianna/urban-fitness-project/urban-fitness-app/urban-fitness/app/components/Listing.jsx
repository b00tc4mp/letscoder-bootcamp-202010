import React from "react";
import Card from "./Card";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import ActivityCard from "./ActivityCard";

export default function Listing({ activities, onListingDetails }) {
  console.log(activities);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
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
            image={item._id}
            location={item.address}
            dates={item.selectedItems}
            hour={item.duration}
          />
        </TouchableOpacity>
      )}
    />
  );
}
