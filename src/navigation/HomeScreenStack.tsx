import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UserTabs from "./UserTabs";

const Stack = createNativeStackNavigator();

const TwoScreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
        name="UserTab"
        component={UserTabs}
        options={{
          headerShown: false,
        }}
      />
          </Stack.Navigator>
  );
};

export default TwoScreenStack;
