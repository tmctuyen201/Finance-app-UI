//Display class and course info as a header on top of screen
//CHUA XONG

import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import MenuButton from "./MenuButton";

type headerTextProps = {
  className: string;
  courseName: string;
  title: string;
  navigation: any;
};

var width = Dimensions.get("window").width; //full width

const ClassInfoHeader = ({
  className,
  courseName,
  title,
  navigation,
}: headerTextProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitles}>
        <MenuButton onPress={() => navigation.openDrawer()} />
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <View style={styles.headerText}>
        <Text style={styles.classText}>Class {className}</Text>
        <Text style={styles.courseText}>Course: {courseName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    
    fontFamily: "brandon",
    fontSize: 30,
    color: "#341C26",
  },
  headerText: {
    alignItems: "flex-end",
    paddingRight: 20
  },
  classText: {
    fontFamily:"brandon-bold",
    fontSize: 26,
    color: "#341C26",
  },
  courseText: {
    fontFamily:"brandon-light",
    color: "#341C26",

    fontSize: 18,
  },
  headerTitles:{
    
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    padding: 0,
    backgroundColor: "#ffafcc",
    height: 80,
    shadowColor: "#6B4B3E",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: width,
    zIndex: 3,
    elevation: 12,
    overflow: 'visible',
  },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
});

export default ClassInfoHeader;
