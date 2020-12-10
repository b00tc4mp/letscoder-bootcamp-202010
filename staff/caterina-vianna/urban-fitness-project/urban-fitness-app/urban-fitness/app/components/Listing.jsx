import React from "react";
import Card from "./Card";
import { FlatList } from "react-native";

function Listing({ activities }) {
  return (
    <FlatList
      data={activities}
      keyExtractor={activities.id}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subTitle={"$" + item.price}
          image={require("../assets/yoga.jpg")}
        />
      )}
    />
  );
}

export default Listing;
