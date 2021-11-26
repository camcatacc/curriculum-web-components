// Modules
import React from "react";
import { render } from "@testing-library/react";

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
describe("BarTitle", () => {
	it("Renders as expected", () => {
		const { container } = render(<BarTitle {...defaultProps}>Hello, hello</BarTitle>);
		expect(container).toMatchSnapshot();
	});
});
