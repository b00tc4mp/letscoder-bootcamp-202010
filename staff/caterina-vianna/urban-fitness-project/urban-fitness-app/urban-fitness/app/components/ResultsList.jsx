import React from "react";
import Card from "./Card";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function ResultsList({ results, onListingDetails }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={results}
        keyExtractor={results.id}
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
    </ScrollView>
  );
}
