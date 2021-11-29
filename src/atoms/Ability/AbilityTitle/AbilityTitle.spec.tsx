// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import AbilityTitle from "atoms/Ability/AbilityTitle/AbilityTitle";

// Tests
expect.extend(toHaveNoViolations);
describe("AbilityTitle", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<AbilityTitle>Hello, hello</AbilityTitle>);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
