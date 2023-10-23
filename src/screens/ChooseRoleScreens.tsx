import React, { useRef } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const images = [
  {
    id: 1,
    img: require("../../assets/rolesIcon/student.png"),
    title: "Student",
    color: "#ffafcc",
    link: "Drawer"
  },
  {
    id: 2,
    img: require("../../assets/rolesIcon/teacher.png"),
    title: "Teacher",
    color: "#a2d2ff",
    link: "Drawer"
  },

  {
    id: 3,
    img: require("../../assets/rolesIcon/parent.png"),
    title: "Parent",
    color: "#bde0fe",
    link: "Drawer"
  },
  {
    id: 4,
    img: require("../../assets/rolesIcon/admin.png"),
    title: "Content Manager",
    color: "#cdb4db",
    link: "ContentDrawer"
  },
  {
    id: 5,
    img: require("../../assets/rolesIcon/admin.png"),
    title: "Admin",
    color: "#cdb4db",
    link: "AdminDrawer"
  },
];

const ChooseRoleScreens = ({navigation}: any) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  let { width: windowWidth, height: windowHeight } = useWindowDimensions();
  windowHeight = windowHeight - 400;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#343a40" }}>
      <View style={styles.container}>
        <View style={styles.textAreaContainer}>
          {images.map((image, imageIndex) => {
            const inputRange = [
              windowWidth * (imageIndex - 1),
              windowWidth * imageIndex,
              windowWidth * (imageIndex + 1),
            ];
            return (
              <Animated.Text
                key = {image.id}
                style={[
                  styles.textView,
                  {
                    transform: [
                      {
                        translateY: scrollX.interpolate({
                          inputRange,
                          outputRange: [-500, -50, 0],
                        }),
                      },
                    ],
                  },
                  {
                    opacity: scrollX.interpolate({
                      inputRange,
                      outputRange: [0, 1, 0],
                    }),
                  },
                  {
                    color: image.color,
                  },
                ]}
              >
                {image.title}
              </Animated.Text>
            );
          })}
        </View>
        <View style={[styles.scrollContainer, { height: windowHeight }]}>
          <ScrollView
            horizontal={true}
            style={styles.scrollContainer}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          >
            {images.map((image, index) => {
              return (
                  <TouchableOpacity 
                  key = {index}
                  onPress={() => navigation.navigate(image.link)} 
                  style = {{width: windowWidth}}
                  activeOpacity = {0.8}>
                    <Image source={image.img} style={styles.card} />
                  </TouchableOpacity> 
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp",
            });

            return (
              <Animated.View
                key={image.id}
                style={[
                  styles.normalDots,
                  { width },
                  { backgroundColor: image.color },
                ]}
              />
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseRoleScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    shadowColor: "#241c26",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 0.8,
  },
  card: {
    flex: 1,
    marginVertical: 60,
    width: 200,
    height: 200,
    overflow: "hidden",
    alignSelf: "center",
    resizeMode: "cover",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 33,
    fontFamily: "brandon",
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
});