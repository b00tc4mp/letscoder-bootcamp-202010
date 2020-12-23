import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";

const {env: {API_URL}} = process

export default function DetailLivesScreen({ live, user, onAcceptPetition, onDeniePetition, onModifyLive, onGoBack }) {
  const title = live.title
  const liveDate = live.liveDate
  const duration = live.duration
  const payment = live.payment
  const description = live.description
  const promoterId = live.promoterId
  const artistId = live.artistId
  const liveId = live._id
  const status = live.status

  const imageURL = `${API_URL}/lives/${liveId}/images`

  return (

    <View style={{
      backgroundColor: "#f8f4f4",
      paddingHorizontal: 20,
      height: Dimensions.get("window").height,
      width: Dimensions.get("window").width,
    }}>

      <View style={{ marginTop: 70 }}>
        <TouchableOpacity onPress={onGoBack}>
      <Image
        style={styles.goBackIcon}
        source={require("../assets/Arrow_Back.png")}
      />
        </TouchableOpacity>

        <View style={{ borderBottomWidth: "4", borderBottomColor: "purple", width: 150, alignSelf: "center" }}>
          <Text style={styles.registerTitle}>Live Detail</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.liveImage}
            source={{ uri: `${imageURL}` }}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitleActivity}>Date: {liveDate}</Text>
            <Text style={styles.subTitleActivity}>Duration: {duration}</Text>
            <Text style={styles.subTitleActivity}>Payment: {payment}</Text>
            <Text style={styles.subTitleActivity}>Description:</Text>
            <Text style={styles.subTitleActivity}>{description}</Text>

            <Text style={styles.subTitleActivity}>Status: {status}</Text>
            <View style={styles.buttonsContainer}>
              {user.role === "ARTIST" ? <View style={styles.acceptAndDenieButtons}>
                <TouchableOpacity style={styles.livesButtons}
                  onPress={() => { onAcceptPetition({ liveId, title, status, liveDate, duration, payment, description }) }}>
                  <Text style={styles.buttonText}
                  >Accept
            </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.livesButtons}
                  onPress={() => { onDeniePetition({ liveId, title, liveDate, duration, status, payment, description }) }}>
                  <Text style={styles.buttonText}
                  >Denie
            </Text>
                </TouchableOpacity>
              </View>

                : <TouchableOpacity style={styles.modifyLivesButtons}
                  onPress={() => { onModifyLive({ artistId, promoterId, liveId, title, liveDate, duration, payment, description }) }}>
                  <Text style={styles.buttonText}
                  >Modify</Text>
                </TouchableOpacity>}
            </View>
          </View>
        </View>

      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 10,
    overflow: "hidden",
    width: "80%",
    alignSelf: "center"
    // flexDirection: "row"
  },

  goBackIcon: {
    width: 40,
    height: 20,
    marginTop: "-5%"
  },

  title: {
    marginBottom: 7,
    fontSize: 25,
    fontFamily: "Roboto_Regular400",
  },

  subTitleActivity: {
    // color: "green",
    fontWeight: "bold",
    fontFamily: "Roboto-Light",
    marginRight: 20,
    marginTop: 10
  },

  liveImage: {
    width: "100%",
    height: 200,
  },

  detailsContainer: {
    padding: 20
  },

  acceptAndDenieButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },

  livesButtons: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
    marginLeft: "5%",
    marginRight: "5%",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "black",
    width: 88,
    height: 38
  },

  modifyLivesButtons: {
    // marginLeft: "20%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15%",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "black",
    width: 132,
    height: 44
  },

  registerTitle: {
    // marginBottom: "10%",
    // marginRight: "30%",
    fontSize: 32,
    fontFamily: "Roboto_Regular400",
    borderBottomWidth: 5,
    borderColor: "black",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // opacity: .2
  },
  buttonText: {
    color: "white",
    fontFamily: "Roboto-Light",
  },

});