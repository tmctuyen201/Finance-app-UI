import React from "react";
import { View, Text } from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
import { List } from "react-native-paper";
import StatusBarLight from "../../components/StatusBarLight";
import { Feather } from '@expo/vector-icons';

const TakeAttendanceScreens = () => {
  return (
    <View>
      <ClassInfoHeader
        className="A5"
        courseName="MAS"
        title="Take Attendance"
        navigation={undefined}
      />

      <Text
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 18,
          fontFamily: "brandon",
        }}
      >
        Press on your lesson to specify attendance taking
      </Text>

      <View>
        <List.Accordion //controlled
          title="Today(2)"
          expanded={undefined}
          onPress={undefined}
        >
          <List.Item title="Lesson 4" description="0/1" right={() => <Feather name="user-check" size={24} color="black" />}/>
          <List.Item title="Lesson 5" description="0/1" right={() => <Feather name="user-check" size={24} color="black" />}/>
        </List.Accordion>

        <List.Accordion //controlled
          title="Finished(3)"
          expanded={undefined}
          onPress={undefined}
        >
          <List.Item title="Lesson 1" description="1/1" right={() => <Feather name="user-check" size={24} color="black" />}/>
          <List.Item title="Lesson 2" description="1/1" right={() => <Feather name="user-check" size={24} color="black" />}/>
          <List.Item title="Lesson 3" description="1/1" right={() => <Feather name="user-check" size={24} color="black" />}/>
        </List.Accordion>

        <List.Accordion //controlled
          title="Future(4)"
          expanded={undefined}
          onPress={undefined}
        >
          <List.Item title="Lesson 6" description="0/1"/>
          <List.Item title="Lesson 7" description="0/1"/>
          <List.Item title="Lesson 8" description="0/1"/>
          <List.Item title="Lesson 9" description="0/1"/>

        </List.Accordion>
      </View>
    </View>
  );
};

export default TakeAttendanceScreens;
