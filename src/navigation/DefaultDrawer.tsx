import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import CalendarScreens from "../screens/CalendarScreens";
import TwoScreenStack from "./HomeScreenStack";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Switch Language"
        icon={() => <FontAwesome name="language" size={24} color="black" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Visualize"
        icon={() => <FontAwesome name="toggle-off" size={24} color="black" />}
        onPress={() => {}}
      />
      <DrawerItem
        label="Log Out"
        icon={() => <Entypo name="log-out" size={24} color="black" />}
        onPress={() => {
          props.navigation.navigate("LogIn");
        }}
      />
    </DrawerContentScrollView>
  );
}
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        drawerType: "slide",
        headerShown: false,
        swipeEnabled: false,
      }}
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={TwoScreenStack}
        options={{
          drawerIcon: () => <Entypo name="home" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalendarScreens}
        options={{
          drawerIcon: () => (
            <AntDesign name="calendar" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
