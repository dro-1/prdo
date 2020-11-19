import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Button = ({
  text,
  bgColor,
  textColor,
  width,
  style,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ backgroundColor: bgColor, width, padding: 5, ...style }}>
        <Text style={{ color: textColor, ...textStyle }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
