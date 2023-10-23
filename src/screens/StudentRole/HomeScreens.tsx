import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ListItem from "../../components/ListItem";
import MenuButton from "../../components/MenuButton";
import SearchBar from "../../components/SearchBar";

const HomeScreens = ({ navigation }: any) => {
  const [listClass,setListClass] = useState(
    [
      "AI 1705", "SE 1746", "IT 1650", "IS 1701","IA 1578", "AI 1746", "SE 1740", "IS 1500", "SE 1733","IA 1544", "SE 1333", 
    ]
  );
   const [listClassSearch, setListClassSearch] = useState(listClass);
   const handleSearch = (text : string) => {
        
        setListClassSearch(listClass.filter((e) => {return e.includes(text.toUpperCase())})) 
   }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#343a40" }}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        resizeMode="cover"
        style={styles.ImageBackground}
      >
        <View style={styles.MenuTouchableContainer}>
          <MenuButton onPress={() => navigation.openDrawer()} />
          <SearchBar onTextChange={() => {}} />
        </View>
        <View style={styles.ListItemContainer}>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("StudentTab")}
          >
            <ListItem>AI 1705</ListItem>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("TeacherTab")}
          >
            <ListItem>SE 1740</ListItem>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Touchable}
            onPress={() => navigation.navigate("ParentTab")}
          >
            <ListItem>IS 1701</ListItem>
          </TouchableOpacity>
          <ListItem>IT 1650</ListItem>
          <ListItem>IA 1578</ListItem>
          <ListItem>AI 1706</ListItem>
        </View>
      </ImageBackground>
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};

export default HomeScreens;
const styles = StyleSheet.create({
  ListItemContainer: { alignItems: "center" },
  Image: { width: 40, height: 40 },
  MenuTouchable: { padding: 20 },
  MenuTouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageBackground: { flex: 1 },
  Touchable: { width: "100%", alignItems: "center" },
});
