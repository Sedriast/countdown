import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

interface HeaderProps {
	theme: {};
}

export default function Item({ theme }: HeaderProps) {
	return (
		<View style={st.card}>
			<TouchableOpacity style={st.btnedit}>
				<Image
					style={st.logo}
					source={require("../../assets/images/adaptive-icon.png")}
				/>
			</TouchableOpacity>
		</View>
	);
}

const st = StyleSheet.create({
	card: {
		width: 350,
		height: 125,
		marginVertical: 10,
		borderLeftWidth: 5,
		flexDirection: "row",
		paddingHorizontal: 20,
		borderTopRightRadius: 25,
		borderLeftColor: "#0E7490",
		backgroundColor: "#22D3EE",
		borderBottomRightRadius: 10,
	},
	btnedit: {
		top: 5,
		right: 5,
		width: 45,
		height: 45,
		position: "absolute",
		borderRadius: 20,
		backgroundColor: "#0891B2",
	},
	logo: {
		width: 45,
		height: 45,
		marginRight: 10,
	},
});
