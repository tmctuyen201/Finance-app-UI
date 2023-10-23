import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
type InputTextProps = {
  placeHolder: string;
  secureTextEntry: boolean;
};
const InputText = ({ placeHolder, secureTextEntry }: InputTextProps) => {
  return (
    <View style={styles.Container}>
      <TextInput
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        style={styles.TextInput}
      ></TextInput>
    </View>
  );
};

export default InputText;
const styles = StyleSheet.create({
  TextInput: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 7,
    backgroundColor: "white",
  },
  Container: { width: "80%" },
});
