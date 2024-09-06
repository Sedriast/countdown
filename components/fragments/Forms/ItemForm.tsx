import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ItemForm() {
	return (
		<View style={st.body}>
			<Text>ItemForm</Text>
			<TextInput style={st.inputs} placeholder="Nombre" />
			<Text>ItemForm</Text>
			<TextInput style={st.inputs} placeholder="Fecha final" />
		</View>
	);
}

const st = StyleSheet.create({
	body: {
		width: "100%",
		height: 1000,
		flexDirection: "column",
		backgroundColor: "#0000",
	},
	inputs: {
		width: "90%",
		height: 45,
		fontSize: 20,
		borderWidth: 1,
		marginLeft: 10,
		marginRight: 10,
		borderStyle: "solid",
		paddingHorizontal: 20,
		borderColor: "#0E7490",
		backgroundColor: "#A5F3FC",
		marginTop: 10,
	},
});
