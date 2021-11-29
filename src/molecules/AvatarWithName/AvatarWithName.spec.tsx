// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import AvatarWithName from "molecules/AvatarWithName/AvatarWithName";

// Images
import AvatarImage from "assets/avatar.jpg";

// Definitions
import type { AvatarWithNameProps } from "molecules/AvatarWithName/AvatarWithName";

// Default Props
const defaultProps: AvatarWithNameProps = {
	name: "David",
	surname: "Camacho Cateura",
	image: AvatarImage
};

// Tests
expect.extend(toHaveNoViolations);
describe("AvatarWithName", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<AvatarWithName {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
