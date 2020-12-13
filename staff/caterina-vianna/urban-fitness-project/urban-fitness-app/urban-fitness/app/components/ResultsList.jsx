import React from "react";
import Card from "./Card";
import { FlatList, ScrollView, TouchableWithoutFeedback } from "react-native";

export default function ResultsList({ results }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <FlatList
        data={results}
        keyExtractor={results.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={require("../assets/yoga.jpg")}
          />
        )}
      />
    </ScrollView>
  );
}
