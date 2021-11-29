// Modules
import React from "react";
import { customRender } from "utils/customRender";

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
describe("BarAbility", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<BarAbility {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
