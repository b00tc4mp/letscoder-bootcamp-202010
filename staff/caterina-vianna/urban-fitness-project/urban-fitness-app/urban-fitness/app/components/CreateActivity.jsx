import React, { useState } from "react";
import { TextInput, Checkbox } from "react-native-paper";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backgroundNewActivity}>
          <Text style={styles.textNewActivity}>New Activity</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require("../assets/upload-photo.png")}></Image>
          </TouchableOpacity>
          <TextInput
            placeholder="Title"
            onChangeText={(text) => setTitle(text)}
          ></TextInput>
          <TextInput
            placeholder="Description"
            onChangeText={(text) => setDescription(text)}
          ></TextInput>
          <TextInput
            keyboardType="numeric"
            placeholder="Price"
            onChangeText={(text) => setPrice(text)}
          ></TextInput>
          <Text>Material required</Text>
          <Checkbox
            style={styles.checkbox}
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View paddingVertical={5} style={styles.pickerList} />
          <RNPickerSelect
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
          <View paddingVertical={5} />
          <View paddingVertical={5} style={styles.pickerList} />
          <RNPickerSelect
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
            placeholder="Address"
            onChangeText={(text) => setAddress(text)}
          ></TextInput>

          <TextInput
            keyboardType="numeric"
            placeholder="Spots Available"
            onChangeText={(text) => setSpots(text)}
          ></TextInput>
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
            <Text style={styles.customBtnText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundNewActivity: { backgroundColor: "white" },
  textNewActivity: {
    color: "white",
  },
  checkbox: {
    color: "blue",
    margin: 20,
  },
  customBtnText: {
    fontSize: 15,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },

  /* Here, style the background of your button */
  customBtnBG: {
    backgroundColor: "black",
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
