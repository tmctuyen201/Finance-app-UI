import React, { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import AttenReportTable from "../../components/AttendanceTable";
const AttendanceScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Attendance"
        navigation={navigation}
      />
      <View>
        < AttenReportTable/>
      </View>
    </ScrollView>
  );
};

export default AttendanceScreen;
