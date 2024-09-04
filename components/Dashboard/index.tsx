import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../fragments/Header";
import Footer from "../fragments/Footer";

export default function Dashboard() {
	return (
		<>
			<Header theme={{}} />
			<View style={st.panel}></View>
			<Footer theme={{}} />
		</>
	);
}

const st = StyleSheet.create({
	panel: {
		width: "100%",
		height: "85%",
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#000",
		justifyContent: "space-between",
	},
});
