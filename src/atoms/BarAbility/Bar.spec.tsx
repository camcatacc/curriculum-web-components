// Modules
import React from "react";
import { customRender } from "utils/customRender";

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
		const { container } = customRender(<Bar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Renders as expected with animation", () => {
		const { container } = customRender(<Bar {...defaultProps} animated={true} />);
		expect(container).toMatchSnapshot();
	});
});
