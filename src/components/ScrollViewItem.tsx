//Hien thi item co style cho scrollview,... nen them animation, onclick
//CHUA XONG
import React from 'react';
import { View, StyleSheet, Text, Platform, Dimensions } from "react-native";

type ScrollViewItemProps = {
    itemTitle: string;
    itemInfo: string;
    children: any;
};

var width = Dimensions.get("window").width; //full width

const ScrollViewItem = ({ itemTitle, itemInfo, children }: ScrollViewItemProps) => {
    return (
        <View style={styles.item}>
            <View style = {styles.textDiv}>
                <Text style={styles.itemTitle}>{itemTitle}</Text>
                <Text style={styles.itemInfo}>{itemInfo}</Text>
            </View>
            {children}
        </View>
    )

}

const styles = StyleSheet.create({
    textDiv: {
        maxWidth: 210,
    },
    item: {
        padding: 20,
        paddingLeft: 32,
        paddingRight: 32,
        margin: 5,
        backgroundColor: "rgba(189, 224, 254, 0.4)",
        borderRadius: 30,
        height: 112,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    itemInfo: {
        marginTop: 4,
        fontSize: 15,
        color: "#343a40",   
    },
    itemTitle: {
        fontSize: 24,
        fontFamily: Platform.OS === "ios" ? "HelveticaNeue-Light" : "sans-serif-thin",
        color: "#343a40",
        overflow: 'hidden',
        flex: 1,
        maxWidth: 185,
        maxHeight: 30
        
    },
})
export default ScrollViewItem;