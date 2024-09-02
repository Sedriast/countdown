import React, { ReactElement } from "react";

interface HeaderProps {
	children: ReactElement;
}

export const GeneralContext = React.createContext({});

export function GeneralProvider({ children }: HeaderProps) {
	const theme = "light";
	return (
		<GeneralContext.Provider value={{ theme }}>
			{children}
		</GeneralContext.Provider>
	);
}
