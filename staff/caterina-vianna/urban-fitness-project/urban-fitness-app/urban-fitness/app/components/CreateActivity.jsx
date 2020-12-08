import React, { useState } from "react";
import { TextInput, Checkbox } from "react-native-paper";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";

export default function CreateActivity(props) {
  const [checked, setChecked] = React.useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
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
    <View style={styles.backgroundNewActivity}>
      <Text style={styles.textNewActivity}>New Activity</Text>
      <TouchableOpacity onPress={() => {}}>
        <Image source={require("../assets/upload-photo.png")}></Image>
      </TouchableOpacity>
      <TextInput placeholder="Title"></TextInput>
      <TextInput placeholder="Description"></TextInput>
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
        onValueChange={(value) => console.log(value)}
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
        onValueChange={(value) => console.log(value)}
        items={[
          { label: "Daily", value: "daily" },
          { label: "Weekly", value: "weekly" },
          { label: "Biweekly", value: "biweekly" },
          { label: "Monthly", value: "monthly" },
        ]}
      />
      <View paddingVertical={5} />
      <TextInput placeholder="Address"></TextInput>

      <TextInput
        keyboardType="numeric"
        placeholder="Spots Available"
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
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <TouchableOpacity style={styles.customBtnBG} onPress={() => {}}>
        <Text style={styles.customBtnText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
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
