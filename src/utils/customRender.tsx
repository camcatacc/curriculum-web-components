import { ThemeProvider } from "@material-ui/styles";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { ReactElement } from "react";
import { getMaterialTheme } from "styles/materialUi";

export const customRender = (ui: ReactElement, renderOptions?: RenderOptions & { darkMode?: boolean }): RenderResult => {
	const Wrapper: React.FC = ({ children }) => {
		return <ThemeProvider theme={getMaterialTheme(renderOptions?.darkMode ? "dark" : "light")}>{children}</ThemeProvider>;
	};

	return render(ui, { wrapper: Wrapper, ...renderOptions });
};
