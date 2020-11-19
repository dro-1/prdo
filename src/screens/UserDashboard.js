import React, { useState } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, EvilIcons } from "@expo/vector-icons";

const UserDashboard = ({ navigation }) => {
  const [page, setPage] = useState("dashboard");
  return (
    <ScrollView
      style={{ backgroundColor: "#F4F4F4", ...StyleSheet.absoluteFillObject }}
    >
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome Abisola</Text>
        <Image
          style={styles.image}
          source={{ uri: "https://thedro.live/img/seun2.jpg" }}
        />
      </View>

      <View style={styles.switchContainer}>
        <TouchableOpacity onPress={() => setPage("dashboard")}>
          <View
            style={{
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dashboard</Text>
            <View
              style={{
                height: 10,
                width: 40,
                backgroundColor: page === "dashboard" ? "#0D6EA2" : "#F4F4F4",
                borderRadius: 10,
                marginTop: 5,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("journeys")}>
          <View
            style={{
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>Journeys</Text>
            <View
              style={{
                height: 10,
                width: 40,
                backgroundColor: page === "journeys" ? "#0D6EA2" : "#F4F4F4",
                borderRadius: 10,
                marginTop: 5,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      {page === "dashboard" ? (
        <>
          <View style={styles.notifications}>
            <View style={styles.notification}>
              <EvilIcons name="bell" size={40} />
              <Text>2 Notifications</Text>
            </View>
            <View style={styles.notification}>
              <EvilIcons name="location" size={40} />
              <Text>1 Journey</Text>
            </View>
          </View>

          <View style={styles.requests}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserInvitation")}
            >
              <View style={{ ...styles.request, borderLeftColor: "#06DDD6" }}>
                <Text style={{ fontSize: 18 }}>
                  Enola Holmes sent you a request
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserInvitation")}
            >
              <View style={{ ...styles.request, borderLeftColor: "#0D6EA2" }}>
                <Text style={{ fontSize: 18 }}>
                  Samurai Jack sent you a request
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.journeys}>
            <View style={styles.journey}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18 }}>Ada Bello</Text>
                <FontAwesome name="check-circle" size={30} color="green" />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 14 }}>Yesterday, 11AM</Text>
                <Text style={{ fontSize: 14 }}>Summary</Text>
              </View>
            </View>
          </View>
        </>
      )}
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  notifications: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  notification: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 150,
  },
  requests: {
    paddingHorizontal: 28,
    marginTop: 40,
  },
  request: {
    backgroundColor: "#fff",
    justifyContent: "center",
    height: 100,
    marginBottom: 40,
    padding: 10,
    borderLeftWidth: 10,
  },
  journeys: {
    paddingHorizontal: 15,
    marginTop: 40,
  },
  journey: {
    backgroundColor: "#fff",
    padding: 10,
    height: 80,
    justifyContent: "space-between",
  },
});

export default UserDashboard;
