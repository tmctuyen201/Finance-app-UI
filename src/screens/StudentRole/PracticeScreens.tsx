import React, { useRef } from "react";
import {
  View,
  SafeAreaView,
  Animated,
  Image,
  Easing,
  Pressable,
} from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const PracticeScreens = ({ navigation }: any) => {
  const topMotion = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const rotation = useRef(new Animated.Value(0)).current;
  const onLongPress = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(topMotion, {
          toValue: {
            x: 0,
            y: 400,
          },
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.bounce,
        }),
        Animated.timing(topMotion, {
          toValue: {
            x: 500,
            y: 400,
          },
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: false,
          easing: Easing.linear,
        })
      ),
    ]).start();
  };
  const onPressOut = () => {
    Animated.parallel([
      Animated.timing(topMotion, {
        toValue: {
          x: 0,
          y: 0,
        },
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
        easing: Easing.linear,
      }),
    ]).start();
  };
  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ClassInfoHeader
        className="A5"
        courseName="MAS"
        title="Practice"
        navigation={navigation}
      />
      <Pressable
        onLongPress={onLongPress}
        onPressOut={onPressOut}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              transform: [{ rotate: spin }],
              marginTop: topMotion.y,
              marginLeft: topMotion.x,
              width: 150,
              height: 150,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/Artboard1copy.png")}
              resizeMode="cover"
              style={{ width: 100, height: 100 }}
            />
          </Animated.View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
export default PracticeScreens;
