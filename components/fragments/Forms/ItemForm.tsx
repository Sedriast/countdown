import React from "react";
import { StyleSheet, View } from "react-native";

export default function ItemForm() {
	return <View style={st.body}></View>;
}

const st = StyleSheet.create({
	body: {
		width: "100%",
		height: 1000,
		flexDirection: "column",
		backgroundColor: "#0000",
	},
});
