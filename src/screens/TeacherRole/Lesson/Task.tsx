import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, List } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ActionButtons = () => {
  return (
    <View style = {styles.buttonsContainer}>
      <TouchableOpacity onPress={() => {Alert.alert('dcmm')}} style={styles.rightButton}><AntDesign name="checkcircleo" size={24} color="black" /></TouchableOpacity>
      <TouchableOpacity style={styles.rightButton}><AntDesign name="closecircleo" size={24} color="black" /></TouchableOpacity>
    </View>
  )  
}

//TODO đưa list về dạng 1 chiều, ấn vào item sẽ hiện info thêm, có 2 nút bên phải để Take task và Close task 

const Task = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 18 }}>
        Click on a task to see Info / Perform action{" "}
      </Text>

      <View style={styles.scrollContainer}>
        <List.AccordionGroup>
          
          <List.Accordion title="Offline Test 1" id="2" style={styles.task}
            left ={() => <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
            right={() => <ActionButtons/>}>
             <List.Item title="Start Date: 20/2/2023" style={styles.dropDownInfo}/>
          </List.Accordion>
          
        </List.AccordionGroup>
      </View>
    </View>
  );
};

export default Task;
const styles = StyleSheet.create({
  dropDownInfo: {
    
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    display: 'flex'
  },
  rightButton: {
    paddingHorizontal: 10
  },
  leftButton: {
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
  },

  ListItemContainer: { alignItems: "center" },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
  MenuTouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",

    height: 800,
  },
  task: {
    paddingLeft: 30,
    marginBottom: 10,
    backgroundColor: "rgba(189, 224, 254, 0.4)",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ImageBackground: { flex: 1 },
  Touchable: { width: "100%", alignItems: "center" },
});
