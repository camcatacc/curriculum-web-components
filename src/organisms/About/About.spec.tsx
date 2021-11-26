// Modules
import React from "react";
import { render } from "@testing-library/react";

// Elements
import About from "organisms/About/About";

// Definitions
import type { AboutProps } from "organisms/About/About";

// Default Props
const defaultProps: AboutProps = {
	name: "David",
	surname: "Camacho Cateura",
	paragraphs: <p>These are example paragraphs</p>
};

// Tests
describe("About", () => {
	it("Renders as expected", () => {
		const { container } = render(<About {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
