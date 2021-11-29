// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import BarAbility from "molecules/BarAbility/BarAbility";

// Definitions
import type { BarAbilityProps } from "molecules/BarAbility/BarAbility";

// Default Props
const defaultProps: BarAbilityProps = {
	percentage: 80,
	barColor: "red",
	name: "Cool",
	titleColor: "white"
};

// Tests
expect.extend(toHaveNoViolations);
describe("BarAbility", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<BarAbility {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
