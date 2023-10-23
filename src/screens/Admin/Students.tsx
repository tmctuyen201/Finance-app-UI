import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";

import { Text } from "react-native-paper";

import { DataTable, List } from "react-native-paper";


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
  const [id, setId] = useState<number>();
  const showInfo = (id: number) => {
    setId(id);
    setVisibility(true);
  };
  return (
    <View>
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

        {students.map((student, index) => {
          return (
            <DataTable.Row key={student.id} onPress={() => showInfo(index)}>
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

      <View>
        {students.map((student, index) => {
          return (
            <View style={styles.centeredView} key={index}>
              {id == index && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={visibility}
                  onRequestClose={() => setVisibility(false)}
                >
                  <TouchableOpacity
                    activeOpacity={1}
                    onPressOut={() => setVisibility(false)}
                  >
                    <TouchableWithoutFeedback>
                      <View style={styles.modalView}>
                        <Image source={student.img} style={styles.icon} />
                        <Text style={styles.modalContent}>
                          <Text style={{ fontFamily: "brandon-bold" }}>
                            Name:{" "}
                          </Text>
                          {student.name}
                        </Text>

                        <Text style={styles.modalContent}>
                          <Text style={{ fontFamily: "brandon-bold" }}>
                            Email:{" "}
                          </Text>
                          {student.email}
                        </Text>
                        <Text style={styles.modalContent}>
                          <Text style={{ fontFamily: "brandon-bold" }}>
                            Parent Name:{" "}
                          </Text>
                          {student.parentName}
                        </Text>
                        <Text style={styles.modalContent}>
                          <Text style={{ fontFamily: "brandon-bold" }}>
                            Parent Phone Number:{" "}
                          </Text>
                          {student.parentPhone}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </TouchableOpacity>
                </Modal>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

var height = Dimensions.get("window").height;
var width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  item: {
    resizeMode: 'center',
    height: 40,
    width: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    width: 150,
    height: 150,
    paddingBottom: 100,
    borderBottom: 100
    
  },
  modalView: {
    marginTop: height * 0.15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: width * 0.7,
    height: height * 0.7,
    position: "absolute",
    alignSelf: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    fontFamily: "brandon",
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: "white",
    width: 320,
    height: 300,
    marginTop: 80,
    marginLeft: 33,
    justifyContent: "space-around",
  },
});
export default StudentList;