import "../src/styles/globals.css";
import React from "react";

import { addDecorator } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { getMaterialTheme } from "../src/styles/materialUi";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};

addDecorator((story) => (
	<ThemeProvider theme={getMaterialTheme("light")}>
		<CssBaseline />
		{story()}
	</ThemeProvider>
));
