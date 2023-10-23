import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChooseSchool from "../ChooseSchool";
import BottomTab from "./BottomTab";
import ClassBottomTab from "./ClassBottomTab";

const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator initialRouteName="ChooseCourse">
      <Stack.Screen
        name="ChooseSchool"
        component={ChooseSchool}
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
        name="ClassBottomTab"
        component={ClassBottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
