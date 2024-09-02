import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderProps {
	theme: {};
}

export default function Header({ theme }: HeaderProps) {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{"this i the title"}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 60,
		paddingTop: 15,
		backgroundColor: "#f7287b",
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		color: "white",
		fontSize: 18,
	},
});
