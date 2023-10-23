import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { DataTable } from "react-native-paper";


const data = [
    {
      id: "01",
      name: "Hai Xuan",
      img: { uri: "https://reactjs.org/logo-og.png" },
      attend: "Absent",
      feedback: "",
    },
    {
      id: "02",
      name: "Nguyen Duc",
      img: { uri: "https://reactjs.org/logo-og.png" },
      attend: "Absent",
      feedback: "",
    },
    {
      id: "03",
      name: "Trinh Tuyen",
      img: { uri: "https://reactjs.org/logo-og.png" },
      attend: "Absent",
      feedback: "Good",
    },
  ];
  
  const FeedbackTable = () => {
    return (
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Image</DataTable.Title>
            <DataTable.Title> </DataTable.Title>
            <DataTable.Title>Feedback</DataTable.Title>
          </DataTable.Header>
  
          {data.map((student) => {
            return (
              <DataTable.Row key={student.id}>
                <DataTable.Cell>{student.name}</DataTable.Cell>
                <DataTable.Cell>
                  <Image source={student.img} style={styles.item} />
                </DataTable.Cell>
                <DataTable.Cell>
                  {
                    <Text style={{ fontSize: 10, color: "red" }}>
                      {student.attend}
                    </Text>
                  }
                </DataTable.Cell>
                <DataTable.Cell>
                  {student.feedback == "" ? "..." : student.feedback}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      width: 25,
      height: 25,
    },
  });

  export default FeedbackTable;