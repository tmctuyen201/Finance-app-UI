import React, { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";
import GradeReportTable from "../../components/GradeReportTable";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const GradeReportScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Grade Report"
        navigation={navigation}
      />
      <View>
        <GradeReportTable />
      </View>
    </ScrollView>
  );
};

export default GradeReportScreen;
