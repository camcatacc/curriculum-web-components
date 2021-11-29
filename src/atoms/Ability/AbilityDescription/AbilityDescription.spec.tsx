// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import AbilityDescription from "atoms/Ability/AbilityDescription/AbilityDescription";

// Tests
expect.extend(toHaveNoViolations);
describe("AbilityDescription", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<AbilityDescription>Hello, hello</AbilityDescription>);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
