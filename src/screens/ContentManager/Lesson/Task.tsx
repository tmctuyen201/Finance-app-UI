import React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import ClassInfoHeader from "../../../components/ClassInfoHeader";
import { AntDesign } from "@expo/vector-icons";

//TODO Lam` task thanh component ScrollViewItem
const Tasks = ({ navigation }: any) => {
  return (
    
      <View style={{ flex: 1 , backgroundColor: 'white'}}>
        
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Tasks"
          navigation={navigation}
        />
        <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 18 }}>
          Click on a task to see Info / Perform action{" "}
        </Text>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.task}>
              <View>
                <Text style={styles.taskTitle}>Offline Test L1</Text>
                <Text style={styles.taskInfo}>Start: 12:00AM | 15/2</Text>
              </View>
              <AntDesign name="check" size={50} color="#ffafcc" style={{}} />
            </View>

            <View style={styles.task}>
              <View>
                <Text style={styles.taskTitle}>Homework L2</Text>
                <Text style={styles.taskInfo}>Due: 08:00AM | 18/2</Text>
              </View>
            </View>

            <View style={styles.task}>
              <View>
                <Text style={styles.taskTitle}>Homework L3</Text>
                <Text style={styles.taskInfo}>Due: 12:00AM | 14/2</Text>
              </View>
              <AntDesign name="check" size={50} color="#ffafcc" style={{}} />
            </View>
          </ScrollView>
        </View>
      </View>
  )
}

export default Tasks;

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
