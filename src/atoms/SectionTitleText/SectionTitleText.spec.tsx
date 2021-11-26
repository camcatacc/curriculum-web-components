// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import SectionTitleText from "atoms/SectionTitleText/SectionTitleText";

// Definitions
import type { SectionTitleTextProps } from "atoms/SectionTitleText/SectionTitleText";

// Default Props
const defaultProps: SectionTitleTextProps = {
	children: "Bu"
};

// Tests
describe("SectionTitleText", () => {
	it("Renders as expected", () => {
		const { container } = render(<SectionTitleText {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
