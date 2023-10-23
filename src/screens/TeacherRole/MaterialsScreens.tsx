import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScrollViewItem from "../../components/ScrollViewItem";
import { AntDesign } from "@expo/vector-icons";

var windowWidth = Dimensions.get("window").width; //full width

const MaterialsScreens = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <ClassInfoHeader
        className="A5"
        courseName="MAS"
        title="Material"
        navigation={navigation}
      />
      <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 18 }}>
        Click on a task to preview{" "}
      </Text>

      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={windowWidth}
          snapToAlignment={"center"}
        >
          <View style={styles.horizontalItemContainer}>
            <View style={styles.horizontalTitleContainer}>
              <View style={styles.arrows}>
                <AntDesign name="caretright" size={30} color="black" />
              </View>
              <Text style={styles.horizontalTitle}>Lesson Material</Text>
            </View>

            <ScrollView>
              <ScrollViewItem
                itemTitle="A Guide to Tuyen"
                itemInfo="uploaded: 10/2"
              >
                <MaterialCommunityIcons
                  name="magnify-expand"
                  size={38}
                  color="#ffafcc"
                />
              </ScrollViewItem>

              <ScrollViewItem
                itemTitle="How: Money works "
                itemInfo="uploaded: 12/2"
              >
                <MaterialCommunityIcons
                  name="magnify-expand"
                  size={38}
                  color="#ffafcc"
                />
              </ScrollViewItem>
            </ScrollView>
          </View>

          <View style={styles.horizontalItemContainer}>
            <View style={styles.horizontalTitleContainer}>
              <View style={[styles.arrows, { justifyContent: "flex-start" }]}>
                <AntDesign name="caretleft" size={30} color="black" />
              </View>
              <Text style={styles.horizontalTitle}>Lesson Material</Text>
            </View>

            <ScrollView>
              <ScrollViewItem
                itemTitle="The subtle art"
                itemInfo="uploaded: 10/2"
              >
                <MaterialCommunityIcons
                  name="magnify-expand"
                  size={38}
                  color="#ffafcc"
                />
              </ScrollViewItem>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default MaterialsScreens;

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 26,
    fontFamily:
      Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
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
