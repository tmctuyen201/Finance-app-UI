import React from "react";
import {View} from "react-native";
import { DataTable } from "react-native-paper";

const AttenReportTable = () => {
  return (
    <View style={{}}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Lesson</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Duration</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>

        {data.map((student) => {
          return (
            <DataTable.Row key={student.id}>
              <DataTable.Cell>{student.lesson} </DataTable.Cell>
              <DataTable.Cell>{student.date}</DataTable.Cell>
              <DataTable.Cell>{student.duration}</DataTable.Cell>
              <DataTable.Cell>
                {student.status == 0 ? "Absent" : "Present"}
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
    lesson: "Lesson 1",
    date: "14/02/2023",
    duration: "45 minutes",
    status: 0,
  },
  {
    id: 2,
    lesson: "Lesson 2",
    date: "15/02/2023",
    duration: "45 minutes",
    status: 0,
  },
  {
    id: 3,
    lesson: "Lesson 3",
    date: "17/02/2023",
    duration: "45 minutes",
    status: 0,
  },
];

export default AttenReportTable;
