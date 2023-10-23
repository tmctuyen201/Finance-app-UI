import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
type TaskListProps = {
    time?: string
    date?: string
    children: string
    isDone: boolean
}
const TaskList = ({time, date, children, isDone = false}: TaskListProps) => {
  return (
    <View style={styles.task}>
      <View>
        <Text style={styles.taskTitle}>{children}</Text>
        <Text style={styles.taskInfo}>Start: {time} | {date}</Text>
      </View>
      {isDone && <AntDesign name="check" size={50} color="#ffafcc" />}
    </View>
  );
};

export default TaskList;
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
});
