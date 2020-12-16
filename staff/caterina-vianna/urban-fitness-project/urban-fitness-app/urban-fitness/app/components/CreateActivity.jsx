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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MultiSelect from "react-native-multiple-select";

export default function CreateActivity({ onSubmitActivity, onCloseProfile }) {
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
  const [selectedItems, setSelectedItems] = useState([]);
  const [duration, setDuration] = useState("");

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
  /* 
  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  }; */

  // Data Source for the SearchableDropdown

  const onSelectedItemsChange = (selectedItems) => {
    // Set Selected Items
    setSelectedItems(selectedItems);
  };

  const items = [
    // name key is must. It is to show the text in front
    { id: "SUN ", name: "Sunday" },
    { id: "MON ", name: "Monday" },
    { id: "TUE ", name: "Tuesday" },
    { id: "WED ", name: "Wednesday" },
    { id: "THR ", name: "Thrusday" },
    { id: "FRI ", name: "Friday" },
    { id: "SAT ", name: "Saturday" },
  ];

  const pickerStyle = {
    inputIOS: {
      color: "black",
    },
    inputAndroid: {
      color: "black",
      fontSize: 11,
      marginRight: 40,
      marginLeft: 40,

      backgroundColor: "white",
      borderRadius: 20,
      placeholderColor: "black",
      borderRadius: 10,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backgroundNewActivity}>
          <ScrollView style={styles.scrollView}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  {
                    onCloseProfile();
                  }
                }}
              >
                <Icon style={styles.closeIcon} name="close" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.underlineNewActivity}>
              <Text style={styles.textNewActivity}>NEW ACTIVITY</Text>
            </View>
            <TextInput
              style={styles.textInputForm}
              placeholder="Title"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setTitle(text)}
            ></TextInput>
            <View style={styles.textInputFormDescriptionContainer}>
              <TextInput
                style={styles.textInputFormDescription}
                placeholder="Description"
                multiline={true}
                numberOfLines={10}
                placeholderTextColor="#9c9c9c"
                onChangeText={(text) => setDescription(text)}
              ></TextInput>
            </View>
            <TextInput
              style={styles.textInputForm}
              placeholder="from 00h to 00h"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setDuration(text)}
            ></TextInput>
            <TextInput
              style={styles.textInputForm}
              keyboardType="numeric"
              placeholder="Price"
              placeholderTextColor="#9c9c9c"
              onChangeText={(text) => setPrice(text)}
            ></TextInput>
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
            <View style={styles.containerChecked}>
              <Text style={styles.textMaterialRequired}>Material required</Text>
              <View style={styles.checkBox}>
                <Checkbox
                  uncheckedColor="white"
                  color="#FF61DC"
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!checked);
                  }}
                />
              </View>
            </View>
            <View paddingVertical={5} style={styles.pickerList} />
            <View style={styles.pickerRadius}>
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
            <View style={styles.pickerRadius}>
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
            </View>
            <View paddingVertical={5} />
            <View paddingVertical={5} style={styles.pickerList} />
            <View style={styles.pickerRadius}>
              <View style={styles.containerMultiselect}>
                <MultiSelect
                  hideTags
                  items={items}
                  uniqueKey="id"
                  onSelectedItemsChange={onSelectedItemsChange}
                  selectedItems={selectedItems}
                  selectText="Trainning days"
                  searchInputPlaceholderText="Trainning days"
                  onChangeInput={(text) => console.log(text)}
                  tagRemoveIconColor="#CCC"
                  tagBorderColor="#CCC"
                  tagTextColor="#CCC"
                  selectedItemTextColor="#CCC"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{ color: "grey" }}
                  submitButtonColor="grey"
                  submitButtonText="Submit"
                  backgroundColor="white"
                  margin={5}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={selectImage}
                style={{ alignContent: "center", alignItems: "center" }}
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
              <View style={styles.imageContainer}>
                <Image
                  source={
                    imageUri
                      ? { uri: imageUri.localUri }
                      : require("../assets/image-upload-mountain.png")
                  }
                  style={{ width: null, resizeMode: "contain", height: 210 }}
                />
              </View>
            </View>
            {/* <Text style={styles.textNewActivity}>SESSIONS</Text>
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
            </View> */}

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
                  selectedItems,
                  duration,
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
  closeIcon: {
    marginTop: 30,
    marginLeft: 310,

    color: "white",
  },
  containerMultiselect: {
    marginRight: 30,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 20,
    borderRadius: 10,
  },
  imageUpload: {
    alignItems: "center",
    alignContent: "center",
  },
  imageContainer: {
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden",
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
    marginTop: 10,
  },
  checkBox: { marginTop: 10 },
  textNewActivity: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  textMaterialRequired: {
    color: "#9c9c9c",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 20,
    fontSize: 11,
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
  textInputFormDescription: {
    marginHorizontal: 20,
    color: "white",
    textDecorationLine: "none",
  },
  textInputFormDescriptionContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 35,
  },
  pickerRadius: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    borderRadius: 20,
    borderRadius: 10,
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
    marginBottom: 30,
  },

  //multiple select
});
