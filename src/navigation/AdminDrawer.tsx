import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from "@react-navigation/drawer";
  import CalendarScreens from "../screens/CalendarScreens";
  import { AntDesign } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { Entypo } from "@expo/vector-icons";
import ContentManagerStack from "../screens/ContentManager/navigation/Stack";
import AdminStack from "../screens/Admin/navigation/stack";
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
  const AdminDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName={"Admin"}
        screenOptions={{
          drawerType: "slide",
          headerShown: false,
          swipeEnabled: false,
        }}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Admin"
          component={AdminStack}
          options={{
            drawerIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Content Manager"
          component={ContentManagerStack}
          options={{
            drawerIcon: () => <Entypo name="menu" size={24} color="black" />,
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
  export default AdminDrawer;
  