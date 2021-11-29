// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import Paragraph from "atoms/Paragraph/Paragraph";

// Definitions
import type { ParagraphProps } from "atoms/Paragraph/Paragraph";

// Default props
const defaultProps: ParagraphProps = {
	children: <p>Bu</p>
};

// Tests
expect.extend(toHaveNoViolations);
describe("Paragraph", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<Paragraph {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
