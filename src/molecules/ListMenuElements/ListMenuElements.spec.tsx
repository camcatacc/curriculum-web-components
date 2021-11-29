// Modules
import React from "react";
import { fireEvent } from "@testing-library/react";
import { customRender } from "utils/customRender";

// Elements
import ListMenuElements from "molecules/ListMenuElements/ListMenuElements";

// Definitions
import type { ListMenuElementsProps } from "molecules/ListMenuElements/ListMenuElements";

// Mocks
const onClickMock = jest.fn();

// Default Props
const defaultProps: ListMenuElementsProps = {
	menuElements: [{ name: "Home", onClick: onClickMock, id: "home>" }],
	selectedId: "home"
};

// Tests
describe("ListMenuElements", () => {
	beforeEach(() => {
		window.matchMedia = (query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn()
		});
	});

	it("Renders as expected in desktop", () => {
		const { container } = customRender(<ListMenuElements {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Renders as expected in mobile", () => {
		window.matchMedia = (query) => ({
			matches: true,
			media: query,
			onchange: null,
			addListener: jest.fn(), // Deprecated
			removeListener: jest.fn(), // Deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn()
		});
		const { container } = customRender(<ListMenuElements {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Calls onClick function", () => {
		const { getByText } = customRender(<ListMenuElements {...defaultProps} />);
		const home = getByText("Home");
		fireEvent.click(home);

		expect(onClickMock).toHaveBeenCalled();
	});
});
