// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import AvatarWithName from "molecules/AvatarWithName/AvatarWithName";

// Definitions
import type { AvatarWithNameProps } from "molecules/AvatarWithName/AvatarWithName";

// Default Props
const defaultProps: AvatarWithNameProps = {
	name: "David",
	surname: "Camacho Cateura"
};

// Tests
describe("AvatarWithName", () => {
	it("Renders as expected", () => {
		const { container } = render(<AvatarWithName {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
