import { Stack } from "expo-router";

import { GeneralContext } from "@/hooks/useGeneralContext";
import Header from "@/components/fragments/Header";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="header"
				options={{
					title: "Home",
					headerShown: false,
				}}>
				{(e) => {
					return <Header theme={e.theme} />;
				}}
			</Stack.Screen>
		</Stack>
	);
}
