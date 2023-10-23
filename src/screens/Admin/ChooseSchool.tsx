import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import ClassInfoHeader from "../../components/ClassInfoHeader";
type ItemData = {
  id: string;
  title: string;
};
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};
const schools: ItemData[] = [
  { id: "1", title: "School1" },
  { id: "2", title: "School2" },
  { id: "3", title: "School3" },
  { id: "4", title: "School4" },
];
const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

const ChooseSchool = ({ navigation }: any) => {
  const [selectedId, setSelectedId] = useState<string>();
  const renderItem = ({ item }: { item: ItemData }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#FFAACF";
    const color = item.id === selectedId ? "white" : "black";
    const OnPressNav = () => {
      setSelectedId(item.id)
      navigation.navigate('BottomTab', {})
    }
    return (
      <Item
        item={item}
        onPress={() => OnPressNav()}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ClassInfoHeader
        className="1"
        courseName="IS"
        title="Admin"
        navigation={navigation}
      />
      <Text
        style={{
          textAlign: "center",
          padding: 20,
          fontSize: 18,
          fontFamily: "brandon",
        }}
      >
        Press a school to view more details
      </Text>
      <FlatList
        data={schools}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

export default ChooseSchool;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 32,
  },
});
