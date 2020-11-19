import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Tracker from "./../components/Tracker";
import { TouchableOpacity } from "react-native-gesture-handler";

const TrackingScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("UserInvitation")}>
          <Ionicons name="md-arrow-back" size={35} />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={{ uri: "https://thedro.live/img/seun2.jpg" }}
        />
      </View>
      <Tracker />
      <View style={{ height: 40 }} />
      <Tracker reverse />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#06DDD6",
    height: 80,
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  welcome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default TrackingScreen;
