import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
type CustomButtonProps = {
  children: string;
  backgroundColor: string;
  color: string;
  onPress?: any;
  width: string;
};
const CustomButton = ({
  children,
  backgroundColor,
  color,
  onPress,
  width,
}: CustomButtonProps) => {
  return (
    <View
      style={{
        width: `${width}`,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          alignItems: "center",
          padding: 15,
          backgroundColor: `${backgroundColor}`,
          borderRadius: 10,
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: `${color}`,
          }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
