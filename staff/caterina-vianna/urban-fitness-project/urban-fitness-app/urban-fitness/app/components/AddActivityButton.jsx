import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function AddActivityButton({ onCreateActivity }) {
  return (
    <View>
      <TouchableOpacity
        style={{ alignContent: "center", alignItems: "center" }}
        onPress={onCreateActivity}
      >
        <Image
          style={{
            width: 55,
            height: 55,
            marginVertical: 30,
          }}
          source={require("../assets/upload-image-icon.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
