import React from "react";
import {
	View,
	Image,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

interface HeaderProps {
	theme: {};
}

export default function Header({ theme }: HeaderProps) {
	return (
		<View style={st.header}>
			<Image
				style={st.logo}
				source={require("../../assets/images/adaptive-icon.png")}
			/>
			<TextInput style={st.searchInput} placeholder="Buscar" />
			<TouchableOpacity
				onPress={() => {
					console.log("Account button pressed");
				}}>
				<Image
					style={st.logo}
					source={require("../../assets/images/adaptive-icon.png")}
				/>
			</TouchableOpacity>
		</View>
	);
}

const st = StyleSheet.create({
	header: {
		height: 75,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		backgroundColor: "#67E8F9",
		justifyContent: "space-between",
	},
	logo: {
		width: 45,
		height: 45,
		marginRight: 10,
	},
	searchInput: {
		width: 275,
		height: 45,
		fontSize: 20,
		borderWidth: 1,
		marginLeft: 10,
		marginRight: 10,
		borderStyle: "solid",
		paddingHorizontal: 20,
		borderColor: "#0E7490",
		backgroundColor: "#A5F3FC",
		borderTopLeftRadius: 22.5,
		borderTopRightRadius: 22.5,
		borderBottomLeftRadius: 22.5,
		borderBottomRightRadius: 22.5,
	},
	accountButton: {
		width: 45,
		height: 45,
		marginLeft: 10,
	},
});
