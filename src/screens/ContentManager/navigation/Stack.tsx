import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChooseCourse from "../ChooseCourse";
import BottomTab from "./BottomTab";
import LessonBottomTab from "./LessonBottomTab";


const Stack = createNativeStackNavigator();

const ContentManagerStack = () => {
  return (
    <Stack.Navigator initialRouteName="ChooseCourse">
      <Stack.Screen
        name="ChooseCourse"
        component={ChooseCourse}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LessonBottomTab"
        component={LessonBottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ContentManagerStack;
