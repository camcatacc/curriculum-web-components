// Modules
import React from "react";
import { fireEvent } from "@testing-library/react";
import { customRender } from "utils/customRender";
import "@testing-library/jest-dom/extend-expect";

// Elements
import CircularBackground from "atoms/CircularBackground/CircularBackground";

// Definitions
import type { CircularBackgroundProps } from "atoms/CircularBackground/CircularBackground";

const defaultProps: CircularBackgroundProps = {
	children: <p>Circular Background</p>,
	backgroundColor: "black"
};
// Rendering
const renderComponent = (props = {}) => {
	const combinedProps = { ...defaultProps, ...props };
	return customRender(<CircularBackground {...combinedProps} />);
};

describe("CircularBackground", () => {
	it("Snapshot", () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
	});

	it("Renders the required props as stated", () => {
		const { getByText, getByTestId } = renderComponent();
		expect(getByTestId("container")).toHaveStyle("background-color: black");
		expect(getByText("Circular Background")).toBeInTheDocument();
	});
});
// Tests
