import React from "react";
import {View} from "react-native";
import { DataTable } from "react-native-paper";

const GradeReportTable = () => {
  return (
    <View style={{}}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={{flex:0.6}}>Test Name</DataTable.Title>
          <DataTable.Title style={{flex: 0.6}}>Date</DataTable.Title>
          <DataTable.Title style={{flex:0.4}}>Value</DataTable.Title>
          <DataTable.Title style={{flex:0.8}}>Comment</DataTable.Title>
        </DataTable.Header>

        {data.map((student) => {
          return (
            <DataTable.Row key={student.id}>
              <DataTable.Cell style={{flex: 0.6}}>{student.test} </DataTable.Cell>
              <DataTable.Cell style={{flex:0.6}}>{student.date}</DataTable.Cell>
              <DataTable.Cell style={{flex: 0.4}}>{student.grade}</DataTable.Cell>
              <DataTable.Cell style={{flex:0.8}}>
                {student.cmt == "" ? "No Comment" : student.cmt}
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

const data = [
  {
    id: 1,
    test: "Test 1",
    date: "14/02/2023",
    grade: 8,
    cmt: "Good",
  },
  {
    id: 2,
    test: "Test 2",
    date: "14/02/2023",
    grade: 8,
    cmt: "",
  },
  {
    id: 3,
    test: "Test 3",
    date: "14/02/2023",
    grade: 9,
    cmt: "",
  },
];

export default GradeReportTable;
