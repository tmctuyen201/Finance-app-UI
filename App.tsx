import React from "react";
import MyStack from "./src/navigation/LogInStack";
import { useFonts } from "expo-font";
import StatusBarLight from "./src/components/StatusBarLight";

export default function App() {
  const [fontsLoaded] = useFonts({
    brandon: require("./assets/fonts/Brandon_reg.otf"),
    "brandon-thin": require("./assets/fonts/Brandon_thin.otf"),
    "brandon-light": require("./assets/fonts/Brandon_light.otf"),
    "brandon-med": require("./assets/fonts/Brandon_med.otf"),
    "brandon-black": require("./assets/fonts/Brandon_blk.otf"),
    "brandon-bold": require("./assets/fonts/Brandon_bld.otf"),
  });
  if (!fontsLoaded) return null;
  else {
    return (
      <>
        <StatusBarLight />
        <MyStack />
      </>
    );
  }
}
