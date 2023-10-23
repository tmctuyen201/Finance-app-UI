import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedbackScreens from "../screens/StudentRole/FeedBackScreens";
import GradeScreens from "../screens/StudentRole/GradeScreens";
import MaterialsScreens from "../screens/StudentRole/MaterialsScreens";
import PracticeScreens from "../screens/StudentRole/PracticeScreens";
import TaskScreens from "../screens/StudentRole/TaskScreens";
import Colors from "../components/Color";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  AccessibilityState,
} from "react-native";
import Icon from "../components/Icon";
import * as Animatable from "react-native-animatable";
import { useRef, useEffect } from "react";
import { GestureResponderEvent } from "react-native-modal/dist/types";

const TabArr = [
  {
    route: "Tasks",
    label: "Tasks",
    type: FontAwesome,
    icon: "tasks",
    component: TaskScreens,
  },
  {
    route: "Materials",
    label: "Materials",
    type: MaterialCommunityIcons,
    icon: "material-design",
    component: MaterialsScreens,
  },
  {
    route: "Feedback",
    label: "Feedback",
    type: MaterialIcons,
    icon: "feedback",
    component: FeedbackScreens,
  },
  {
    route: "Grade",
    label: "Grade",
    type: MaterialIcons,
    icon: "grade",
    component: GradeScreens,
  },
  {
    route: "Practice",
    label: "Practice",
    type: MaterialIcons,
    icon: "list-alt",
    component: PracticeScreens,
  },
];
const Tab = createBottomTabNavigator();

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
};

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };
type Props = {
  item: {
    route: string;
    label: string;
    type: {};
    icon: string;
    component: React.FC;
  };
  onPress?: (e: GestureResponderEvent) => void;
  accessibilityState?: AccessibilityState | undefined;
};
const TabButton = (props: Props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState?.selected;
  const viewRef = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const textRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current?.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? Colors.white : Colors.primary}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function StudentTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: 70,
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: Colors.primary,
  },
});
