// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import About from "organisms/About/About";

// Images
import Avatar from "assets/avatar.jpg";

// Definitions
import type { AboutProps } from "organisms/About/About";

// Default Props
const defaultProps: AboutProps = {
	name: "David",
	surname: "Camacho Cateura",
	paragraphs: <p>These are example paragraphs</p>,
	image: Avatar
};

// Tests
expect.extend(toHaveNoViolations);
describe("About", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<About {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});

	it("Renders as expected when animated", () => {
		const { container } = customRender(<About {...defaultProps} animated={true} />);
		expect(container).toMatchSnapshot();
	});
});
