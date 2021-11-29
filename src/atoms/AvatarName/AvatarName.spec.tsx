// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import AvatarName from "atoms/AvatarName/AvatarName";

// Tests
expect.extend(toHaveNoViolations);
describe("AvatarName", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<AvatarName name="Marco" surname="Polo" />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
