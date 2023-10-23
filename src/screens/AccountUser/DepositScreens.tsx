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
     <View style={{ flex: 1 , backgroundColor: 'white'}}>
        
        <ClassInfoHeader
          title="Banking"
          navigation={navigation}
        />
      </View>
  );
};

export default FeedbackScreens;
