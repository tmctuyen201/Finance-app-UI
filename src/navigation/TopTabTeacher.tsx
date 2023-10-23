import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Materials from "../screens/TeacherRole/Lesson/Materials";
import Task from "../screens/TeacherRole/Lesson/Task";

const Tab = createMaterialTopTabNavigator();

const TopTabTeacher = () => {
  return (
    <Tab.Navigator
      initialRouteName="TasksTeacher"
      screenOptions={{ tabBarStyle: { borderRadius: 20, marginTop: 21 } }}
    >
      <Tab.Screen name="Tasks" component={Task} />
      <Tab.Screen name="Materials" component={Materials} />
    </Tab.Navigator>
  );
};
export default TopTabTeacher;
