// Modules
import React from "react";
import { fireEvent } from "@testing-library/react";
import { customRender } from "utils/customRender";
import "@testing-library/jest-dom/extend-expect";

// Elements
import MenuElement from "atoms/MenuElement/MenuElement";

// Styling
import { primary } from "styles/customColors";

// Definitions
import type { MenuElementProps } from "atoms/MenuElement/MenuElement";

// Default Props
const defaultProps: MenuElementProps = {
	onClicked: jest.fn(),
	selected: false,
	title: "Home",
	color: "white"
};

// Rendering
const renderComponent = (props = {}) => {
	const combinedProps = { ...defaultProps, ...props };
	return customRender(<MenuElement {...combinedProps} />);
};

// Tests
describe("MenuElement", () => {
	it("Renders as expected", () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
	});

	it("If selected is not true, the color is white", () => {
		const { getByRole } = renderComponent({ selected: false });
		const link = getByRole("link");
		expect(link).toHaveStyle("color: rgba(0, 0, 0, 0.54)");
	});

	it("If selected is true, the color is primary", () => {
		const { getByRole } = renderComponent({ selected: true });
		const link = getByRole("link");
		expect(link).toHaveStyle(`color: ${primary}`);
	});

	it("If clicked, call the onClick function", () => {
		const { getByRole } = renderComponent();
		const link = getByRole("link");
		fireEvent.click(link);
		expect(defaultProps.onClicked).toHaveBeenCalled();
	});
});
