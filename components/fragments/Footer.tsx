import React from "react";
import { View, StyleSheet } from "react-native";

interface HeaderProps {
	theme: {};
}

export default function Footer({ theme }: HeaderProps) {
	return <View style={st.footer}></View>;
}

const st = StyleSheet.create({
	footer: {
		height: 75,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		backgroundColor: "#67E8F9",
		justifyContent: "space-between",
	},
});
