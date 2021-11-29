// Modules
import React from "react";
import { customRender } from "utils/customRender";

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
		const { container } = customRender(<SectionTitleText {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders as expected with animation", () => {
		const { container } = customRender(<SectionTitleText {...defaultProps} animated={true} />);
		expect(container).toMatchSnapshot();
	});
});
