// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import BarTitle from "atoms/BarAbility/BarTitle";

// Definitions
import type { BarTitleProps } from "atoms/BarAbility/BarTitle";

// Default props
const defaultProps: BarTitleProps = {
	backgroundColor: "red",
	fontColor: "white",
	title: "Testing"
};

// Tests
expect.extend(toHaveNoViolations);
describe("BarTitle", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<BarTitle {...defaultProps}>Hello, hello</BarTitle>);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
