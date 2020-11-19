import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import CTextInput from "./../components/TextInput";
import Button from "./../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignupScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome</Text>
      <Text style={styles.subText}>Let's keep you safe</Text>
      <View style={styles.overlay}>
        <Text style={styles.overlayHead}>Sign Up</Text>
        <Text style={styles.overlaySub}>To get started</Text>
        <Text style={styles.inputLabel}>First Name</Text>
        <CTextInput style={styles.textInput} />
        <Text style={styles.inputLabel}>Last Name</Text>
        <CTextInput style={styles.textInput} />
        <Text style={styles.inputLabel}>Email</Text>
        <CTextInput style={styles.textInput} />
        <Text style={styles.inputLabel}>Password</Text>
        <CTextInput style={styles.textInput} />
        <Button
          text="Sign Up"
          bgColor="#06DDD6"
          textColor="#000"
          width={185}
          style={{
            borderRadius: 8,
            marginBottom: 20,
            alignSelf: "center",
            paddingVertical: 13,
            paddingHorizontal: 60,
            marginTop: 20,
          }}
          textStyle={{
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("CreateProfile")}
        />
        <Text style={styles.footer}>
          {" "}
          Already have an account?{" "}
          <TouchableOpacity
            style={{ top: 4 }}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text
              style={{
                color: "#0D6EA2",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Log In
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

export default SignupScreen;
