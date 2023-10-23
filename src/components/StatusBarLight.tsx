import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
//https://coolors.co/palette/cdb4db-ffc8dd-ffafcc-bde0fe-a2d2ff
//status bar khi dien thoai o che do light mode (chu khong phai text tren status bar la` mau` trang)
class Statusbar extends Component {
  render() {
    return (
      <View style={styles.StatusBar}>
        <StatusBar translucent style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "#343a40",
  },
});

export default Statusbar;
