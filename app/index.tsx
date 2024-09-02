import { NavigationContainer } from "@react-navigation/native";

import { GeneralProvider } from "@/hooks/useGeneralContext";
import RootLayout from "./_layout";

export default function App() {
	return (
		<NavigationContainer independent={true}>
			<GeneralProvider>
				<RootLayout />
			</GeneralProvider>
		</NavigationContainer>
	);
}
