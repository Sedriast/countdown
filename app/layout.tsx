import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import { GeneralContext } from "@/hooks/useGeneralContext";
import Header from "@/components/fragments/Header";
import Home from "@/components/Home";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}
