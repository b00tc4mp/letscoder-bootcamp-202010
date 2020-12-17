import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export default function DetailLivesScreen({ live, user, onAcceptPetition, onDeniePetition, onModifyLive, onGoToProfile }) {
  const title = live.title
  const liveDate = live.liveDate
  const duration = live.duration
  const payment = live.payment
  const description = live.description
  const promoterId = live.promoterId
  const artistId = live.artistId
  const liveId = live._id
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        {user.role === "ARTIST" ? <TouchableOpacity onPress={onGoToProfile}>
          <Image style={styles.logo} source={require('../assets/artist-role-image.png')} />
        </TouchableOpacity> :
          <TouchableOpacity onPress={onGoToProfile}>
            <Image style={styles.logo} source={require('../assets/promoter-role-image.png')} />
          </TouchableOpacity>
        }
        <Text style={styles.titleActivity}>{title}</Text>
        <Text style={styles.subTitleActivity}>Date: {liveDate}</Text>
        <Text style={styles.subTitleActivity}>Duration: {duration}</Text>
        <Text style={styles.subTitleActivity}>Payment: {payment}</Text>
        <Text style={styles.subTitleActivity}>{description}</Text>
        {/* <Text style={styles.subTitleActivity}>Status: {status}</Text> */}

        <View style={styles.buttonsContainer}>
          {user.role === "ARTIST" ? <View>
            <TouchableOpacity style={styles.livesButtons}
              onPress={() => { onAcceptPetition({ artistId, promoterId, liveId, title, liveDate, duration, payment, description }) }}>
              <Text
              >Accept
            </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.livesButtons}
              onPress={() => { onDeniePetition({ artistId, promoterId, liveId, title, liveDate, duration, payment, description }) }}>
              <Text
              >Accept
            </Text>
            </TouchableOpacity>
          </View>

            : <TouchableOpacity style={styles.livesButtons}
              onPress={() => { onModifyLive({ artistId, promoterId, liveId, title, liveDate, duration, payment, description }) }}>
              <Text
              >Modify</Text>
            </TouchableOpacity>}
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden",
    // flexDirection: "row"

  },

  titleActivity: {
    color: "black",
    fontSize: 18,
    alignSelf: "center"
    // fontFamily: Platform.OS === "ios" ? "Roboto" : "Avenir",
  },

  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "50%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: "green",
    fontWeight: "bold",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch"
  },

  livesButtons: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: "gray",
    width: "25%",
    height: "45%"
  }
});