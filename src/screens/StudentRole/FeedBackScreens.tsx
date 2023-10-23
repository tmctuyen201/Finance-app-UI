import React, { useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { Modal, Portal, Provider } from "react-native-paper";
import ClassInfoHeader from "../../components/ClassInfoHeader";

const FeedbackScreens = ({ navigation }: any) => {
  const [countAtten, setAtten] = useState(0);
  const [countLesson, setLesson] = useState(3);

  const [visible1, setVisible1] = React.useState(false);
  const showModal1 = () => setVisible1(true);
  const hideModal1 = () => setVisible1(false);

  const [visible2, setVisible2] = React.useState(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const containerStyle = { backgroundColor: "white", margin: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible1}
          onDismiss={hideModal1}
          contentContainerStyle={containerStyle}
        >
          <View>
            <Text style={{fontSize:25, backgroundColor:"#ffcccc", padding: 10}}>Personal</Text>
            <Text style={{padding:10}}>No feedback for now 1</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between", marginTop:25, padding:10  }}
            >
              <Button 
              title="Person"
              disabled
              color='#ffcccc' />
              <Button
                title="Class"
                onPress={showModal2}
                color='#ffcccc'
              />
            </View>
          </View>
        </Modal>
        <Modal
          visible={visible2}
          onDismiss={hideModal2}
          contentContainerStyle={containerStyle}
        >
          <View>
            <Text style={{fontSize:25, backgroundColor:"#ffcccc", padding: 10}}>Class</Text>
            <Text style={{padding:10}}>No feedback for now 2</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between", marginTop:25, padding:10  }}
            >
              <Button 
              title="Person"
              onPress={hideModal2}
              color='#ffcccc' />
              <Button
                title="Class"
                disabled
                color='#ffcccc'
              />
            </View>
          </View>
        </Modal>
        
      </Portal>
      <ScrollView>
        <ClassInfoHeader
          className="1"
          courseName="IS"
          title="Feedback"
          navigation={navigation}
        />
        <View>
          <Text style={{ fontSize: 25 }}>
            Class Attendance {countAtten}/{countLesson}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 1,
              margin: 5,
              marginVertical: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 20 }}>Lesson 1</Text>
              <Text>
                Start at: 14/2/2023{"\n"}
                Duration: 90 minutes{"\n"}
                Status: Started
              </Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                onPress={showModal1}
                title="View Feedback"
                color="#F94B4B"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
};

export default FeedbackScreens;
