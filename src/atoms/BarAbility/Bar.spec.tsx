// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

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
expect.extend(toHaveNoViolations);
describe("Bar", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<Bar {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});

	it("Renders as expected with animation", () => {
		const { container } = customRender(<Bar {...defaultProps} animated={true} />);
		expect(container).toMatchSnapshot();
	});
});
