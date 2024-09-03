import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";

import { GeneralProvider } from "@/hooks/useGeneralContext";
import Header from "@/components/fragments/Header";
import RootLayout from "./layout";
import Footer from "@/components/fragments/Footer";

export default function App() {
	return (
		<NavigationContainer independent={true}>
			<StatusBar backgroundColor="#67E8F9" />
			<View style={st.screen}>
				<Header theme="" />
				<GeneralProvider>
					<RootLayout />
				</GeneralProvider>
				<Footer theme="" />
			</View>
		</NavigationContainer>
	);
}

const st = StyleSheet.create({
	screen: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#CFFAFE",
		justifyContent: "space-between",
	},
});
