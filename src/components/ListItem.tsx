import React from "react";
import { View, Text, StyleSheet } from "react-native";

type ListItemProps = {
  children: string;
};
const ListItem = ({ children }: ListItemProps) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
};

export default ListItem;
const styles = StyleSheet.create({
  Container: {
    width: "80%",
    backgroundColor: "#f0ffff",
    borderRadius: 25,
    padding: 5,
    marginVertical: 10,
  },
  Text: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    paddingLeft: 15,
  },
});
