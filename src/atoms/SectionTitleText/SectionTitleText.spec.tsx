// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import SectionTitleText from "atoms/SectionTitleText/SectionTitleText";

// Definitions
import type { SectionTitleTextProps } from "atoms/SectionTitleText/SectionTitleText";

// Default Props
const defaultProps: SectionTitleTextProps = {
	children: "Bu"
};

// Tests
expect.extend(toHaveNoViolations);
describe("SectionTitleText", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<SectionTitleText {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
	it("Renders as expected with animation", () => {
		const { container } = customRender(<SectionTitleText {...defaultProps} animated={true} />);
		expect(container).toMatchSnapshot();
	});
});
