import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import ClassInfoHeader from "../../../components/ClassInfoHeader";
import LessonsTable from "../components/LessonsTable";

const Course = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 , backgroundColor: 'white'}}>
        
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Course"
          navigation={navigation}
        /> 
        <View>
          <Text style={{fontSize:25, paddingVertical:10, paddingLeft:10}}>Lesson Info</Text>
          <LessonsTable/>
        </View>      
      </View>
    )
  }
  
  export default Course;