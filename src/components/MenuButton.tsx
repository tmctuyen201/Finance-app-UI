import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

type MenuButtonProps = {
  onPress: () => {};
};
const MenuButton = ({ onPress }: MenuButtonProps) => {
  return (
    <TouchableOpacity style={styles.MenuTouchable} onPress={onPress}>
      <Image source={require("../../assets/menu.png")} style={styles.Image} />
    </TouchableOpacity>
  );
};

export default MenuButton;
const styles = StyleSheet.create({
  Image: { width: 40, height: 40 },
  MenuTouchable: { paddingLeft: 20, paddingRight: 14 },
});
