// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import AbilityTitle from "atoms/Ability/AbilityTitle/AbilityTitle";

// Tests
describe("AbilityTitle", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<AbilityTitle>Hello, hello</AbilityTitle>);
		expect(container).toMatchSnapshot();
	});
});
