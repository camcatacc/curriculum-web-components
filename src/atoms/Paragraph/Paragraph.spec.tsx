// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import Paragraph from "atoms/Paragraph/Paragraph";

// Definitions
import type { ParagraphProps } from "atoms/Paragraph/Paragraph";

// Default props
const defaultProps: ParagraphProps = {
	children: <p>Bu</p>
};

// Tests
describe("Paragraph", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<Paragraph {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
