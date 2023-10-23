import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ClassInfoHeader from "../../../components/ClassInfoHeader";
import TaskList from "../../../components/TaskList";

const LessonScreens = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Lesson"
          navigation={navigation}
        />
        <Text style={{ textAlign: "center", paddingTop: 20, fontSize: 18 }}>
          Click on a task to see Info / Perform action{" "}
        </Text>
        <View style={styles.scrollContainer}>
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigation.navigate("TaskInLessonTeacher")}
            >
              <TaskList time={"12:00 AM"} date={"15/2"} isDone={true}>
                Lesson 1
              </TaskList>
            </TouchableOpacity>
            <TaskList time={"08:00 PM"} date={"18/2"} isDone={false}>
              Lesson 2
            </TaskList>
            <TaskList time={"12:00 AM"} date={"14/2"} isDone={true}>
              Lesson 3
            </TaskList>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LessonScreens;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 40,
    paddingTop: 20,
    display: "flex",
    flexDirection: "column",

    height: 800,
  },
  SafeArea: {
    flex: 1,
    backgroundColor: "#343a40",
  },
});
