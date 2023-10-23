import React from "react";
import { DataTable } from "react-native-paper";

const GradeTable =()=> {
    return(
      <DataTable>
          <DataTable.Header>
            <DataTable.Title>Test Name</DataTable.Title>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title numeric>Grade</DataTable.Title>
          </DataTable.Header>
  
          {data.map((student) => {
            return (
              <DataTable.Row key={student.id}>
                <DataTable.Cell>{student.test} </DataTable.Cell>
                <DataTable.Cell>{student.date}</DataTable.Cell>
                <DataTable.Cell>{student.grade}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
    )
  }
  
  const data =[
    {
      id: 1,
      test: "Test 1",
      date: "14/02/2023",
      grade: 8,
    },
    {
      id: 2,
      test: "Test 2",
      date: "14/02/2023",
      grade: 8,
    },
    {
      id: 3,
      test: "Test 3",
      date: "14/02/2023",
      grade: 9,
    },
  ]

  export default GradeTable
  