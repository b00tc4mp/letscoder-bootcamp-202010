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
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={activities}
      keyExtractor={activities.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            onListingDetails({ listingDetailsItem: item });
          }}
        >
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.id}
            location={item.address}
            dates={item.selectedItems}
            hour={item.duration}
          />
        </TouchableOpacity>
      )}
    />
  );
}
