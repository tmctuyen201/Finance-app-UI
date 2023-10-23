import React, { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";
import OffTestGradeTable from "../../components/OfflineTestGradeTable";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const OfflineTestGradeScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Offline Grade"
        navigation={navigation}
      />
      <View>
        <OffTestGradeTable />
      </View>
    </ScrollView>
  );
};

export default OfflineTestGradeScreen;
