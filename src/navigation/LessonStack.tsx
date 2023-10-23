import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LessonScreens from "../screens/TeacherRole/Lesson/LessonScreens";
import TopTabTeacher from "./TopTabTeacher";


const Stack = createNativeStackNavigator();

const LessonStack = () => {
  return (
    <Stack.Navigator initialRouteName="LessonTeacher">
      <Stack.Screen
        name="LessonTeacher"
        component={LessonScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TaskInLessonTeacher"
        component={TopTabTeacher}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LessonStack;
