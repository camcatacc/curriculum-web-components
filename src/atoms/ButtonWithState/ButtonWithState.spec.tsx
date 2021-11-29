// Modules
import React from "react";
import { fireEvent } from "@testing-library/react";
import { customRender } from "utils/customRender";
import "@testing-library/jest-dom/extend-expect";

// Elements
import ButtonWithState from "atoms/ButtonWithState/ButtonWithState";

// Definitions
import type { ButtonWithStateProps } from "atoms/ButtonWithState/ButtonWithState";

const defaultProps: ButtonWithStateProps = {
	children: "Loading button",
	onClick: jest.fn()
};
// Rendering
const renderComponent = (props = {}) => {
	const combinedProps = { ...defaultProps, ...props };
	return customRender(<ButtonWithState {...combinedProps} />);
};

describe("LoadingButton", () => {
	it("Snapshot", () => {
		const { container } = renderComponent();
		expect(container).toMatchSnapshot();
	});

	it("Calls onClick when clicked", () => {
		const { getByRole } = renderComponent();
		const button = getByRole("button");
		fireEvent.click(button);
		expect(defaultProps.onClick).toHaveBeenCalled();
	});

	it("Does not call onClick if disabled", () => {
		const { getByRole } = renderComponent({ disabled: true });
		const button = getByRole("button");
		fireEvent.click(button);
		expect(defaultProps.onClick).not.toHaveBeenCalled();
	});

	it("Shows loading if loading", () => {
		const { getByRole } = renderComponent({ loading: true });
		const loading = getByRole("progressbar");
		expect(loading).toBeInTheDocument();
	});
});
// Tests
