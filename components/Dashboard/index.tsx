import React, { useState } from "react";
import {
	Text,
	View,
	FlatList,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
} from "react-native";
import Item from "../fragments/Item";
import Modals from "../fragments/Modals";
import ItemForm from "../fragments/Forms/ItemForm";

interface HeaderProps {
	data: { id: string; title: string }[];
}

export default function Dashboard({ data }: HeaderProps) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<View style={st.panel}>
				<FlatList
					data={data}
					renderItem={({ item }) => <Item theme={""} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
			<TouchableOpacity
				style={st.btnadd}
				onPress={() => setModalVisible(!modalVisible)}>
				<Text style={st.btnaddtext}>Añadir</Text>
			</TouchableOpacity>
			<Modals
				children={<ItemForm />}
				isVisible={modalVisible}
				VisibleTrigger={() => setModalVisible(!modalVisible)}
			/>
		</>
	);
}

const st = StyleSheet.create({
	panel: {
		width: "100%",
		height: "100%",
		paddingVertical: 10,
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#CFFAFE",
	},
	btnadd: {
		right: 20,
		width: 125,
		height: 45,
		bottom: 20,
		fontSize: 30,
		color: "#CFFAFE",
		position: "absolute",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#06B6D4",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
	btnaddtext: { color: "#CFFAFE", fontSize: 25 },
});
