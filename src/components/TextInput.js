import React from "react";
import { TextInput } from "react-native";

const CTextInput = (props) => {
  const { style, placeholder } = props;
  return (
    <TextInput
      {...props}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#0D6EA2",
        marginBottom: 10,
        ...style,
      }}
      placeholder={placeholder}
    />
  );
};

export default CTextInput;
