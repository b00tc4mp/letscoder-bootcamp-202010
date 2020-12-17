import { View } from "react-native";
import React from "react";

export default function Search({}) {
  return (
    <View style={styles.containerInputSearch}>
      <TextInput
        placeholder=" Search activity"
        style={styles.inputSearchActivity}
        onChangeText={(text) => {
          setQuery(text);
          debugger;
        }}
      />

      <TouchableOpacity onPress={() => {}}>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search-icon.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInputSearch: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  inputSearchActivity: {
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    height: 48,
    width: 150,
    paddingLeft: 20,
  },
});
