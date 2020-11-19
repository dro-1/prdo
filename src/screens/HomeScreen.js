import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Button from "./../components/Button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.overContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Render services to clients around you
        </Text>
        <View style={{ height: 50 }} />
        <Button
          text="SIGN UP"
          bgColor="#fff"
          textColor="#000"
          width={300}
          style={{
            borderRadius: 30,
            marginBottom: 20,
            alignSelf: "center",
            paddingVertical: 20,
          }}
          textStyle={{
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("Signup")}
        />
        <Button
          text="LOG IN"
          bgColor="#06DDD6"
          textColor="#FAFAFA"
          width={300}
          style={{
            borderRadius: 30,
            marginBottom: 20,
            alignSelf: "center",
            paddingVertical: 20,
          }}
          textStyle={{
            fontWeight: "700",
            fontSize: 16,
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("Signin")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overContainer: {
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  container: {},
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
    width: 280,
  },
  subText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 50,
  },
});

export default HomeScreen;
