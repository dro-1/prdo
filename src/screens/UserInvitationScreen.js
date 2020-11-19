import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Entypo,
  Foundation,
} from "@expo/vector-icons";
import Button from "./../components/Button";

const UserInvitationScreen = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);
  return (
    <ScrollView
      style={{ backgroundColor: "#FfFfff", ...StyleSheet.absoluteFillObject }}
    >
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome Abisola</Text>
        <Image
          style={styles.image}
          source={{ uri: "https://thedro.live/img/seun2.jpg" }}
        />
      </View>

      <View style={styles.topIcons}>
        <View style={styles.topImage}>
          <AntDesign name="user" size={50} />
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <MaterialIcons name="call" size={30} />
          </View>
          <View style={styles.icon}>
            <Foundation name="mail" size={30} />
          </View>
          <View style={styles.icon}>
            <Entypo name="cross" size={40} />
          </View>
        </View>
      </View>

      <View style={styles.overlay}>
        <View style={{ ...styles.infoBox, marginTop: 50 }}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>
            Name Of Customer
          </Text>
          <Text style={{ fontSize: 16 }}>Ademola Bakare</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Gender</Text>
          <Text style={{ fontSize: 16 }}>Female</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Service</Text>
          <Text style={{ fontSize: 16 }}>Hair-dressing</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Location</Text>
          <Text style={{ fontSize: 16 }}>Calgary, Canada</Text>
        </View>
        {accepted ? (
          <Button
            style={{ borderRadius: 36, padding: 18 }}
            textStyle={{
              fontSize: 22,
              textAlign: "center",
              fontWeight: "bold",
            }}
            text="Start Journey"
            bgColor="#06DDD6"
            textColor="rgba(0,0,0,0.7)"
            onPress={() => navigation.navigate("Tracking")}
          />
        ) : (
          <>
            <Button
              style={{ borderRadius: 36, padding: 18, marginBottom: 20 }}
              textStyle={{
                fontSize: 22,
                textAlign: "center",
                fontWeight: "bold",
              }}
              text="ACCEPT INVITATION"
              bgColor="#06DDD6"
              textColor="rgba(0,0,0,0.7)"
              onPress={() => setAccepted(true)}
            />
            <Button
              style={{ borderRadius: 36, padding: 18 }}
              textStyle={{
                fontSize: 22,
                textAlign: "center",
                fontWeight: "bold",
              }}
              text="DECLINE INVITATION"
              bgColor="#666"
              textColor="#fff"
              onPress={() => navigation.navigate("UserDashboard")}
            />
          </>
        )}
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("UserDashboard")}
        >
          <View style={styles.homeBtn}>
            <AntDesign name="home" size={40} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeBtn: {
    position: "absolute",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "#06DDD6",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    bottom: 300,
    zIndex: 1,
  },
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
  topIcons: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  topImage: {
    height: 150,
    width: 150,
    backgroundColor: "#EDEDED",
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  iconContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    width: 300,
  },
  icon: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "relative",
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
    marginTop: 20,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingBottom: 50,
  },
  infoBox: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
  },
});

export default UserInvitationScreen;
