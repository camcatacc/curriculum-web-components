// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import AbilityDescription from "atoms/Ability/AbilityDescription/AbilityDescription";

// Tests
describe("AbilityDescription", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<AbilityDescription>Hello, hello</AbilityDescription>);
		expect(container).toMatchSnapshot();
	});
});
