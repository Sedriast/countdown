import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Item from "../fragments/Item";

interface HeaderProps {
	data: { id: string; title: string }[];
}

export default function Dashboard({ data }: HeaderProps) {
	return (
		<ScrollView contentContainerStyle={st.panel}>
			<FlatList
				data={data}
				renderItem={({ item }) => <Item theme={""} />}
				keyExtractor={(item) => item.id}
			/>
		</ScrollView>
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
});
