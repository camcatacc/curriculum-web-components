// Modules
import React from "react";
import { customRender } from "utils/customRender";
import { getMaterialTheme } from "styles/materialUi";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import SectionTitleDivider from "atoms/SectionTitleDivider/SectionTitleDivider";
import { ThemeProvider } from "@material-ui/styles";

// Tests
expect.extend(toHaveNoViolations);
describe("SectionTitleDivider", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<SectionTitleDivider />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});

	it("Renders as expected with animation", () => {
		const { container } = customRender(<SectionTitleDivider animated={true} />);
		expect(container).toMatchSnapshot();
	});

	it("Renders white if dark mode is activated", async () => {
		const { container } = customRender(
			<ThemeProvider theme={getMaterialTheme("dark")}>
				<SectionTitleDivider animated={true} />
			</ThemeProvider>
		);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
