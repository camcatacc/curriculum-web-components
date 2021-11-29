// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import SectionTitle from "molecules/SectionTitle/SectionTitle";

// Definitions
import type { SectionTitleProps } from "molecules/SectionTitle/SectionTitle";

// Default Props
const defaultProps: SectionTitleProps = {
	children: "This is a Section Title"
};

// Tests
describe("SectionTitle", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<SectionTitle {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
