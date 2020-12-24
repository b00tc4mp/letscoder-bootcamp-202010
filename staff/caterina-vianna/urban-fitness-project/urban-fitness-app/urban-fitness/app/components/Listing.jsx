import React from "react";
import Card from "./Card";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function Listing({ activities, onListingDetails, refresh }) {
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
            image={{
              uri: `http://192.168.0.11:4000/api/activity/${item.id}/images?refresh=${refresh}`,
            }}
            location={item.address}
            dates={item.selectedItems}
            hour={item.duration}
          />
        </TouchableOpacity>
      )}
    />
  );
}
