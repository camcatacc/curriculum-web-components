// Modules
import React from "react";
import { customRender } from "utils/customRender";

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
describe("About", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<About {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Renders as expected when animated", () => {
		const { container } = customRender(<About {...defaultProps} animated={true} />);
		expect(container).toMatchSnapshot();
	});
});
