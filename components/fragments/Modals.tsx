import React from "react";
import {
	Text,
	Modal,
	View,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	ScrollView,
} from "react-native";

interface HeaderProps {
	isVisible: boolean;
	children: React.ReactNode;
	VisibleTrigger: () => void;
}

export default function Modals({
	children,
	isVisible,
	VisibleTrigger,
}: HeaderProps) {
	return (
		<Modal visible={isVisible} transparent={true} animationType="slide">
			<View style={st.modalContainer}>
				<ScrollView style={st.modalBackground}>{children}</ScrollView>
				<TouchableOpacity style={st.btnclose} onPress={VisibleTrigger}>
					<Text style={st.btnclosetext}>Cerrar</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
}

const st = StyleSheet.create({
	btnclose: {
		top: 75,
		right: 10,
		width: 125,
		height: 45,
		position: "absolute",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
		backgroundColor: "#083344",
		borderTopLeftRadius: 22.5,
		borderTopRightRadius: 22.5,
		borderBottomLeftRadius: 22.5,
		borderBottomRightRadius: 22.5,
	},
	btnclosetext: { color: "#CFFAFE", fontSize: 25 },
	modalContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalBackground: {
		width: "90%",
		height: "80%",
		position: "absolute",
		alignContent: "center",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		backgroundColor: "#22D3EE",
	},
});
