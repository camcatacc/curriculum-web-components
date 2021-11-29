// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import PageSize from "atoms/PageSize/PageSize";

// Definitions
import type { PageSizeProps } from "atoms/PageSize/PageSize";

// Default PRops
const defaultProps: PageSizeProps = {
	children: <p>Bu</p>
};

// Tests
expect.extend(toHaveNoViolations);
describe("PageSize", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<PageSize {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
