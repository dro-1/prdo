import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "./Button";

const Tracker = ({ reverse }) => {
  return (
    <View
      style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 10,
          width: 300,
        }}
      >
        {reverse ? (
          <>
            <AntDesign name="user" color={"#0D6EA2"} size={100} />
            <AntDesign name="user" size={100} />
          </>
        ) : (
          <>
            <AntDesign name="user" size={100} />
            <AntDesign name="user" color={"#0D6EA2"} size={100} />
          </>
        )}
      </View>
      <View
        style={{
          height: 5,
          width: 200,
          backgroundColor: "#06DDD6",
          marginBottom: 15,
        }}
      />
      <Text style={{ fontSize: 18 }}> From your house to client's house</Text>
      <View
        style={{
          flexDirection: "row",
          width: 250,
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Button
          text="Start"
          textColor="#000"
          bgColor="#06DDD6"
          width={100}
          textStyle={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
          style={{
            borderRadius: 35,
            padding: 10,
          }}
        />
        <Button
          text="Stop"
          textColor="#fff"
          bgColor="#666"
          width={100}
          textStyle={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
          style={{
            borderRadius: 35,
            padding: 10,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Tracker;
