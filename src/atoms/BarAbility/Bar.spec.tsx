// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import Bar from "atoms/BarAbility/Bar";

// Definitions
import type { BarProps } from "atoms/BarAbility/Bar";

// Default Props
const defaultProps: BarProps = {
	percentage: 40,
	backgroundColor: "red"
};

// Tests
describe("Bar", () => {
	it("Renders as expected", () => {
		const { container } = render(<Bar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
