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
import ClassInfoHeader from "../../../components/ClassInfoHeader";

import { Text } from "react-native-paper";

import { DataTable, List } from "react-native-paper";


const teachers = [
    {
      id: 1,
      img: require("../../../../assets/rolesIcon/student.png"),
      name: "Quy Ban",
      phone: 84941391259,
    },
    {
      id: 2,
      img: require("../../../../assets/rolesIcon/admin.png"),
      name: "Hoang Tuyen",
      phone: 84946251525,
    },
];

const Teachers = () => {
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
        Press on a record to view more details
      </Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title numeric>Phone Number</DataTable.Title>
        </DataTable.Header>

        {teachers.map((teacher, index) => {
          return (
            <DataTable.Row key={teacher.id} onPress={() => showInfo(index)}>
              <DataTable.Cell>
                <Image source={teacher.img} style={styles.item} />
              </DataTable.Cell>
              <DataTable.Cell>{teacher.name}</DataTable.Cell>
              <DataTable.Cell>{teacher.phone}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>

      <View>
        {teachers.map((teacher, index) => {
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
                        <Image source={teacher.img} style={styles.icon} />
                        <Text style={styles.modalContent}>
                          <Text style={{ fontFamily: "brandon-bold" }}>
                            Name:{" "}
                          </Text>
                          {teacher.name}
                        </Text>

                        
                        
                        <Text style={styles.modalContent}>
                          <Text style={{ fontFamily: "brandon-bold" }}>
                            Phone Number:{" "}
                          </Text>
                          {teacher.phone}
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
    width: 280,
    height: 260,
    marginTop: 80,
    marginLeft: 33,
    justifyContent: "space-around",
  },
});
export default Teachers;
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import ClassInfoHeader from "../../components/ClassInfoHeader";
// import { DataTable, List, Modal } from "react-native-paper";


// ];

// const TeacherList = () => {
//   const [visibility, setVisibility] = useState(false);
//   const [teacherInfo, setTeacherInfo] = useState(null);

//   const showInfo = (student: any) => {
//     setTeacherInfo(student);
//     setVisibility(true);
//     const studentList = new Promise(()=>{
//     });

//     return undefined;
//   };
//   return (
//     <View>
//       {/* <Modal
//         visible={visibility}
//         onDismiss={() => setVisibility(false)}
//         contentContainerStyle={styles.modalContent}
//       >
//         <View>
//           <Text>Picture</Text>
          
//         </View>
//       </Modal> */}

//       <ClassInfoHeader
//         className="A5"
//         courseName="MAS"
//         navigation={undefined}
//         title="Student List"
//       />
//       <Text
//         style={{
//           textAlign: "center",
//           padding: 20,
//           fontSize: 18,
//           fontFamily: "brandon",
//         }}
//       >
//         Press onto a record to view more details
//       </Text>
//       <DataTable>
//         <DataTable.Header>
//           <DataTable.Title>Image</DataTable.Title>
//           <DataTable.Title>Name</DataTable.Title>
//           <DataTable.Title numeric>Phone Number</DataTable.Title>
//         </DataTable.Header>

//         {teachers.map((teacher) => {
//           return (
//             <DataTable.Row key={teacher.id} onPress={showInfo}>
//               <DataTable.Cell><Image source={teacher.img} style={styles.item} /></DataTable.Cell>
//               <DataTable.Cell>{teacher.name}</DataTable.Cell>
//               <DataTable.Cell>{teacher.phone}</DataTable.Cell>
//             </DataTable.Row>
//           );
//         })}
//       </DataTable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   item: {
//     width: 34,
//     height: 34,
//   },
//   modalContent: {},
// });
// export default TeacherList;
