// Modules
import React from "react";

// Testing Modules
import { customRender } from "utils/customRender";

// Elements
import MenuBar from "organisms/MenuBar/MenuBar";

// Definitions
import type { MenuBarProps } from "organisms/MenuBar/MenuBar";
import { fireEvent } from "@testing-library/dom";

// Default Props
const defaultProps: MenuBarProps = {
	elements: [
		{ name: "Home", onClick: jest.fn(), id: "home" },
		{ name: "About", onClick: jest.fn(), id: "about" }
	],
	selectedId: "home",
	onSwitchChange: jest.fn(),
	darkModeChecked: false
};

// Tests
describe("MenuBar", () => {
	beforeAll(() => {
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
	it("Renders as expected if width > 720", () => {
		const { container } = customRender(<MenuBar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
	it("Renders as expected with dark mode", () => {
		const { container } = customRender(<MenuBar {...defaultProps} />, { darkMode: true });
		expect(container).toMatchSnapshot();
	});
	it("Calls onSwitchChange function when switch is clicked", () => {
		const { getByRole } = customRender(<MenuBar {...defaultProps} />);
		const switchInput = getByRole("checkbox");
		fireEvent.click(switchInput);
		expect(defaultProps.onSwitchChange).toHaveBeenCalled();
	});
});
