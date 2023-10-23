import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreens from "../screens/StudentRole/HomeScreens";
import StudentTabs from "./StudentBottomTabs";
import TeacherTabs from "./TeacherBottomTabs";
import ParentTabs from "./ParentBottomTabs";

const Stack = createNativeStackNavigator();

const TwoScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StudentTab"
        component={StudentTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TeacherTab"
        component={TeacherTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ParentTab"
        component={ParentTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default TwoScreenStack;
