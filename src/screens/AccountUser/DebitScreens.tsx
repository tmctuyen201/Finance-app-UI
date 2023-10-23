import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const DebitScreens= ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        title="Debit card"
        navigation={navigation}
      />
      <View>
      </View>
    </ScrollView>
  );
};

export default DebitScreens;
