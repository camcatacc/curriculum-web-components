// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import AbilityTitle from "atoms/Ability/AbilityTitle/AbilityTitle";

// Tests
describe("AbilityTitle", () => {
	it("Renders as expected", () => {
		const { container } = render(<AbilityTitle>Hello, hello</AbilityTitle>);
		expect(container).toMatchSnapshot();
	});
});
