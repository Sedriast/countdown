import { NavigationContainer } from "@react-navigation/native";
import { GeneralProvider } from "@/hooks/useGeneralContext";
import { StatusBar } from "expo-status-bar";

import Footer from "@/components/fragments/Footer";
import Header from "@/components/fragments/Header";
import Layout from "./layout";

export default function App() {
	return (
		<>
			<StatusBar backgroundColor="#67E8F9" />
			<Header theme={{}} />
			<NavigationContainer independent={true}>
				<GeneralProvider>
					<Layout />
				</GeneralProvider>
			</NavigationContainer>
			<Footer theme={{}} />
		</>
	);
}
