import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { DataTable, List, Modal } from "react-native-paper";

const students = [
  {
    id: 1,
    img: require("../../../assets/rolesIcon/student.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
  {
    id: 2,
    img: require("../../../assets/rolesIcon/admin.png"),
    name: "Hoang Tuyen",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84946251525,
  },
  {
    id: 3,
    img: require("../../../assets/rolesIcon/teacher.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
  {
    id: 4,
    img: require("../../../assets/rolesIcon/teacher.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
  {
    id: 5,
    img: require("../../../assets/rolesIcon/teacher.png"),
    name: "Hoang Duc",
    email: "mmotkim@gmail.com",
    parentName: "Hoa",
    parentPhone: 84941391259,
  },
];

const StudentList = () => {
  const [visibility, setVisibility] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  const showInfo = (student: any) => {
    setStudentInfo(student);
    setVisibility(true);
    const studentList = new Promise(()=>{
    });

    return undefined;
  };
  return (
    <View>
      {/* <Modal
        visible={visibility}
        onDismiss={() => setVisibility(false)}
        contentContainerStyle={styles.modalContent}
      >
        <View>
          <Text>Picture</Text>
          
        </View>
      </Modal> */}

      <ClassInfoHeader
        className="A5"
        courseName="MAS"
        navigation={undefined}
        title="Student List"
      />
      <Text
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 18,
          fontFamily: "brandon",
        }}
      >
        Press a student to view more details
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Parent Name</DataTable.Title>
          <DataTable.Title numeric>Parent PhoneNum</DataTable.Title>
        </DataTable.Header>

        {students.map((student) => {
          return (
            <DataTable.Row key={student.id} onPress={showInfo}>
              <DataTable.Cell>
                <Image source={student.img} style={styles.item} />
              </DataTable.Cell>
              <DataTable.Cell>{student.name}</DataTable.Cell>
              <DataTable.Cell>{student.parentName}</DataTable.Cell>
              <DataTable.Cell>{student.parentPhone}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 34,
    height: 34,
  },
  modalContent: {},
});
export default StudentList;
