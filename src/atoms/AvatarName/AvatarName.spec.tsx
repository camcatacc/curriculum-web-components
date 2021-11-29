// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import AvatarName from "atoms/AvatarName/AvatarName";

// Tests
describe("AvatarName", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<AvatarName name="Marco" surname="Polo" />);
		expect(container).toMatchSnapshot();
	});
});
