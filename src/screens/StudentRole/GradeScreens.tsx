import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import GradeTable from "../../components/GradeTable";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const GradeScreens = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Grade"
        navigation={navigation}
      />
      <View>
        <GradeTable />
      </View>
    </ScrollView>
  );
};

export default GradeScreens;
