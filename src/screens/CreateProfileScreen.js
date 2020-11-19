import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

const CreateProfileScreen = ({ navigation }) => {
  const [pageNo, setPageNo] = useState(1);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.image}>
        <Entypo name="camera" size={80} />
      </View>
      <View style={styles.overlay}>
        {pageNo === 1 ? (
          <View>
            <Text style={{ ...styles.textLabel, marginTop: 50 }}>Name</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.textLabel}>Email</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.textLabel}>Phone No.</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.textLabel}>Profession</Text>
            <TextInput style={styles.textInput} />
          </View>
        ) : (
          <View>
            <Text style={{ ...styles.textLabel, marginTop: 50 }}>Bio</Text>
            <TextInput
              multiline={true}
              style={{ ...styles.textInput, height: 140 }}
            />
            <Text style={styles.textLabel}>Next Of Kin</Text>
            <TextInput style={styles.textInput} />
            <View style={{ height: 72 }} />
          </View>
        )}
        <Button
          style={styles.nextBtn}
          textStyle={{
            fontSize: 22,
            textAlign: "center",
            fontWeight: "bold",
          }}
          text={pageNo === 1 ? "NEXT" : "SUBMIT"}
          bgColor="#06DDD6"
          textColor="rgba(0,0,0,0.7)"
          onPress={() =>
            pageNo === 1 ? setPageNo(2) : navigation.navigate("UserDashboard")
          }
        />
        <View style={styles.switchContainer}>
          <TouchableOpacity onPress={() => setPageNo(1)}>
            <View
              style={
                pageNo === 1
                  ? { ...styles.switch, ...styles.activeSwitch }
                  : { ...styles.switch, ...styles.inactiveSwitch }
              }
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>1</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.switchSeparator} />
          <TouchableOpacity onPress={() => setPageNo(2)}>
            <View
              style={
                pageNo === 2
                  ? { ...styles.switch, ...styles.activeSwitch }
                  : { ...styles.switch, ...styles.inactiveSwitch }
              }
            >
              <Text style={{ color: "#fff", fontSize: 18 }}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  overlay: {
    position: "relative",
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,
    height: 600,
    marginTop: 50,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  image: {
    marginTop: 80,
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: "center",
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    alignItems: "center",
  },
  textLabel: {
    fontSize: 20,
    marginBottom: 5,
  },
  textInput: {
    marginBottom: 20,
    backgroundColor: "#c4c4c4",
    borderWidth: 0,
    borderRadius: 0,
    fontSize: 18,
  },
  nextBtn: {
    borderRadius: 36,
    padding: 18,
    marginTop: 40,
  },
  switchContainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  inactiveSwitch: {
    backgroundColor: "#666",
  },
  activeSwitch: {
    backgroundColor: "#06DDD6",
  },
  switchSeparator: {
    backgroundColor: "#666",
    width: 50,
    height: 5,
  },
});

export default CreateProfileScreen;
