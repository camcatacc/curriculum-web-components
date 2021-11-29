// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import SectionTitle from "molecules/SectionTitle/SectionTitle";

// Definitions
import type { SectionTitleProps } from "molecules/SectionTitle/SectionTitle";

// Default Props
const defaultProps: SectionTitleProps = {
	children: "This is a Section Title"
};

// Tests
expect.extend(toHaveNoViolations);
describe("SectionTitle", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<SectionTitle {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
