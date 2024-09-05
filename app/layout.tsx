import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "@/components/Dashboard";

const Stack = createNativeStackNavigator();

export default function Layout() {
	return (
		<Stack.Navigator initialRouteName="Dashboard">
			<Stack.Screen
				name="Dashboard"
				options={{
					title: "Dashboard",
					headerShown: false,
				}}>
				{() => <Dashboard data={[{ id: "1", title: "Item 1" }]} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
}
