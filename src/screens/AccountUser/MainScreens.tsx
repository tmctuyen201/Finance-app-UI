import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native'
import ClassInfoHeader from "../../components/ClassInfoHeader";

const MainScreens = ({ navigation }: any) => {
  return (
    
      <View style={{ flex: 1 , backgroundColor: 'white'}}>
        
        <ClassInfoHeader
          title="Home"
          navigation={navigation}
        />
      </View>
  )
}

export default MainScreens;

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 26,
    fontFamily:
      Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
    color: "#343a40",
  },
  taskInfo: {
    marginTop: 8,
    fontSize: 15,
    color: "#343a40",
  },
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    
    height: 800,
  },
  task: {
    padding: 20,
    paddingLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "rgba(189, 224, 254, 0.4)",
    borderRadius: 30,
    height: 112,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SafeArea: {
    flex: 1,
    backgroundColor: '#343a40',
  },
});
