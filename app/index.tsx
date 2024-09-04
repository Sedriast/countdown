import { NavigationContainer } from "@react-navigation/native";

import { GeneralProvider } from "@/hooks/useGeneralContext";
import { StatusBar } from "expo-status-bar";
import Layout from "./layout";

export default function App() {
	return (
		<NavigationContainer independent={true}>
			<StatusBar backgroundColor="#67E8F9" />
			<GeneralProvider>
				<Layout />
			</GeneralProvider>
		</NavigationContainer>
	);
}
