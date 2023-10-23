import React from "react";
import { DataTable } from "react-native-paper";

const LessonsTable =()=> {
    return(
      <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Start Date</DataTable.Title>
            <DataTable.Title>Duration</DataTable.Title>
            <DataTable.Title numeric>Number Of Tasks</DataTable.Title>
          </DataTable.Header>
  
          {data.map((lesson) => {
            return (
              <DataTable.Row key={lesson.id}>
                <DataTable.Cell>{lesson.name} </DataTable.Cell>
                <DataTable.Cell>{lesson.date}</DataTable.Cell>
                <DataTable.Cell>{lesson.duration}</DataTable.Cell>
                <DataTable.Cell>{lesson.numOfTasks}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
    )
  }
  
  const data =[
    {
      id: 1,
      name: "Lesson 1",
      date: "14/02/2023",
      duration: "60 minutues",
      numOfTasks: 2,
    },
    {
      id: 2,
      name: "Lesson 2",
      date: "15/02/2023",
      duration: "60 minutues",
      numOfTasks: 2,
    },
    {
      id: 3,
      name: "Lesson 3",
      date: "16/02/2023",
      duration: "60 minutues",
      numOfTasks: 1,
    },
    {
      id: 4,
      name: "Lesson 4",
      date: "18/02/2023",
      duration: "60 minutues",
      numOfTasks: 0,
    },
  ]

  export default LessonsTable;
  