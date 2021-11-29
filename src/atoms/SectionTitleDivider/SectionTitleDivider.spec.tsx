// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import SectionTitleDivider from "atoms/SectionTitleDivider/SectionTitleDivider";
import { ThemeProvider } from "@material-ui/styles";
import { getMaterialTheme } from "styles/materialUi";

// Tests
describe("SectionTitleDivider", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<SectionTitleDivider />);
		expect(container).toMatchSnapshot();
	});

	it("Renders as expected with animation", () => {
		const { container } = customRender(<SectionTitleDivider animated={true} />);
		expect(container).toMatchSnapshot();
	});

	it("Renders white if dark mode is activated", () => {
		const { container } = customRender(
			<ThemeProvider theme={getMaterialTheme("dark")}>
				<SectionTitleDivider animated={true} />
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
	});
});
