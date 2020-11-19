import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CTextInput from "./../components/TextInput";
import Button from "./../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

const SigninScreen = ({ navigation }) => {
  //   const getLocation = () => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = JSON.stringify(position.coords.latitude);
  //         const longitude = JSON.stringify(position.coords.longitude);
  //         console.log(latitude, longitude);
  //       },
  //       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //     );
  //   };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Hi John</Text>
      <Text style={styles.subText}>Find small scale services with ease</Text>
      <View style={styles.overlay}>
        <Text style={styles.overlayHead}>Log In</Text>
        <Text style={styles.overlaySub}>To continue</Text>
        <Text style={styles.inputLabel}>Email</Text>
        <CTextInput style={styles.textInput} />
        <Text style={styles.inputLabel}>Password</Text>
        <CTextInput style={styles.textInput} />
        <Text
          style={{ color: "#0D6EA2", textAlign: "right", paddingRight: 40 }}
        >
          Forgot Password
        </Text>
        <Button
          text="Log In"
          bgColor="#06DDD6"
          textColor="#000"
          width={185}
          style={{
            borderRadius: 8,
            marginBottom: 20,
            alignSelf: "center",
            paddingVertical: 13,
            paddingHorizontal: 60,
            marginTop: 50,
          }}
          textStyle={{
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("Signup")}
        />
        <Text style={styles.footer}>
          {" "}
          Don't have an account?{" "}
          <TouchableOpacity
            style={{ top: 4 }}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text
              style={{
                color: "#0D6EA2",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06DDD6",
    ...StyleSheet.absoluteFillObject,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "700",
    marginTop: 100,
    marginBottom: 10,
    textAlign: "center",
    color: "#040404",
  },
  subText: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    color: "#040404",
  },
  overlay: {
    backgroundColor: "#FAFAFA",
    height: 650,
    marginTop: 50,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  overlayHead: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
  },
  overlaySub: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 50,
  },
  textInput: {
    width: 340,
    alignSelf: "center",
    fontSize: 16,
  },
  inputLabel: {
    paddingLeft: 38,
    marginBottom: 5,
    fontSize: 18,
  },
  footer: {
    textAlign: "center",
    fontSize: 16,
    padding: 10,
  },
});

export default SigninScreen;
