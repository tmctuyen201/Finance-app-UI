import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";

var windowWidth = Dimensions.get("window").width; //full width

const ApplicationScreens = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ClassInfoHeader
        title="Application"
        navigation={navigation}
      />
    </View>
  );
};

export default ApplicationScreens;

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 26,
    fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
    color: "#343a40",
  },
  item: {
    padding: 20,
    paddingLeft: 32,
    paddingRight: 32,
    margin: 10,
    backgroundColor: "rgba(189, 224, 254, 0.4)",
    borderRadius: 30,
    height: 112,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  horizontalItemContainer: {
    width: windowWidth,
    padding: 20,
    display: "flex",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  horizontalTitle: {
    fontSize: 20,
    fontFamily:
      Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
  },
  horizontalTitleContainer: {
    paddingBottom: 15,
    alignItems: "center",
  },
  scrollContainer: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 800,
  },
  arrows: {
    position: "absolute",
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    maxWidth: windowWidth,
    width: windowWidth,
  },
});
