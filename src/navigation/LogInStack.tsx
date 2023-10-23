import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import ChooseRoleScreens from "../screens/ChooseRoleScreens";
import LogInScreens from "../screens/LogInScreens";
import MyDrawer from "./DefaultDrawer";
import ContentDrawer from "./ContentDrawer";
import AdminDrawer from "./AdminDrawer";
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogInScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseRole"
          component={ChooseRoleScreens}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContentDrawer"
          component={ContentDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminDrawer"
          component={AdminDrawer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
