import { View, Image, TextInput, StyleSheet } from "react-native";

interface SearchBarProps {
  onEndEditing?: any | undefined;
  didTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onTextChange: Function;
}
const SearchBar: React.FC<SearchBarProps> = ({
  onEndEditing,
  didTouch,
  autoFocus = false,
  onTextChange,
}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.TextInputContainer}>
        <Image
          style={styles.Image}
          source={require("../../assets/search.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Search"
          autoFocus={autoFocus}
          onTouchStart={didTouch}
          onChangeText={(text) => onTextChange(text)}
          onEndEditing={onEndEditing}
        ></TextInput>
      </View>
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  TextInput: {
    marginLeft: 5,
    flex: 9,
    display: "flex",
    fontSize: 20,
    height: 42,
  },
  Image: { width: 25, height: 25 },
  TextInputContainer: {
    display: "flex",
    height: 42,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ededed",
    alignItems: "center",
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "#E5E5E",
    borderWidth: 2,
  },
  Container: {
    flex: 1,
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
