import React, { useEffect, useState } from "react";
import { Checkbox } from "react-native-paper";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Screen,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";

export default function CreateActivity({ onSubmitActivity }) {
  const [checked, setChecked] = React.useState(false);
  const [activityDate, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [sport, setSport] = useState("");
  const [repeat, setRepetitivity] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [spots, setSpots] = useState("");
  const [price, setPrice] = useState("");
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) setImageUri({ localUri: result.uri });
    else console.log("Error reading an image");
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || activityDate;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const pickerStyle = {
    inputIOS: {
      color: "black",
    },
    inputAndroid: {
      color: "black",
      fontSize: 11,
      marginRight: 40,
      marginLeft: 40,
      marginTop: 20,
      backgroundColor: "#9c9c9c",
      borderRadius: 20,
      placeholderColor: "black",
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backgroundNewActivity}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.underlineNewActivity}>
              <Text style={styles.textNewActivity}>NEW ACTIVITY</Text>
            </View>

            <TextInput
              style={styles.textInputForm}
              placeholder="Title"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
            <TextInput
              style={styles.textInputForm}
              placeholder="Description"
              multiline={true}
              numberOfLines={10}
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setDescription(text)}
            ></TextInput>
            <TextInput
              style={styles.textInputForm}
              keyboardType="numeric"
              placeholder="Price"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setPrice(text)}
            ></TextInput>
            <View style={styles.containerChecked}>
              <Text style={styles.textMaterialRequired}>Material required</Text>
              <View style={styles.checkBox}>
                <Checkbox
                  uncheckedColor="white"
                  color="pink"
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
            </View>
            <View paddingVertical={5} style={styles.pickerList} />
            <View>
              <RNPickerSelect
                style={pickerStyle}
                placeholder={{
                  label: "Select sport category...",
                  value: null,
                }}
                onValueChange={(value) => setSport(value)}
                items={[
                  { label: "Baseball", value: "baseball" },
                  { label: "Boxing", value: "boxing" },
                  { label: "Crossfit", value: "crossfit" },
                  { label: "Football", value: "football" },
                  { label: "Hockey", value: "hockey" },
                  { label: "Kayak", value: "kayak" },
                  { label: "Pilates", value: "pilates" },
                  { label: "Running", value: "running" },
                  { label: "Skating", value: "skating" },
                  { label: "Yoga", value: "yoga" },
                ]}
              />
            </View>
            <View paddingVertical={5} />
            <View paddingVertical={5} style={styles.pickerList} />
            <RNPickerSelect
              style={pickerStyle}
              placeholder={{
                label: "Select repetivity...",
                value: null,
              }}
              onValueChange={(value) => setRepetitivity(value)}
              items={[
                { label: "Daily", value: "daily" },
                { label: "Weekly", value: "weekly" },
                { label: "Biweekly", value: "biweekly" },
                { label: "Monthly", value: "monthly" },
              ]}
            />
            <View paddingVertical={5} />
            <TextInput
              style={styles.textInputForm}
              placeholder="Address"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setAddress(text)}
            ></TextInput>

            <TextInput
              style={styles.textInputForm}
              keyboardType="numeric"
              placeholder="Spots Available"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setSpots(text)}
            ></TextInput>
            <View>
              <Button
                /* style={styles.imageUpload} */ title="select image"
                onPress={selectImage}
              />
              <Image
                source={
                  imageUri
                    ? { uri: imageUri.localUri }
                    : require("../assets/yoga.jpg")
                }
                style={{ width: "100%", height: 300 }}
              />
            </View>
            <Text style={styles.textNewActivity}>Sessions</Text>
            <View>
              <View>
                <Button onPress={showDatepicker} title="Select start date" />
              </View>
              <View>
                <Button onPress={showTimepicker} title="Select time" />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={activityDate}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => {
                onSubmitActivity({
                  imageUri,
                  title,
                  description,
                  price,
                  checked,
                  address,
                  sport,
                  repeat,
                  spots,
                  activityDate,
                });
              }}
            >
              <Text style={styles.customBtnText}>SAVE ACTIVITY</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundNewActivity: {
    backgroundColor: "black",
  },
  imageUpload: {
    alignItems: "center",
    alignContent: "center",
  },
  underlineNewActivity: {
    borderBottomWidth: 3,
    borderBottomColor: "white",
    marginHorizontal: 128,
    marginBottom: 30,
  },
  containerChecked: {
    display: "flex",
    flexDirection: "row",
  },
  checkBox: { marginTop: 10 },
  textNewActivity: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginTop: 30,
    marginBottom: 10,
  },
  textMaterialRequired: {
    color: "#9c9c9c",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
  },
  textInputForm: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    color: "#4a4a4a",
    fontSize: 11,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
  },
  customBtnText: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    textAlign: "center",
  },

  /* Here, style the background of your button */
  customBtnBG: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 50,
    marginRight: 60,
    marginLeft: 60,
    marginTop: 10,
  },
});
