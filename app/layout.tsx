import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "@/components/Dashboard";
import { StyleSheet, View } from "react-native";
import Header from "@/components/fragments/Header";
import Footer from "@/components/fragments/Footer";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function Layout() {
	return (
		<Stack.Navigator initialRouteName="Dashboard">
			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					title: "Dashboard",
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
