// Modules
import React from "react";

// Testing Modules
import { render } from "@testing-library/react";

// Elements
import MenuBar from "organisms/MenuBar/MenuBar";

// Definitions
import type { MenuBarProps } from "organisms/MenuBar/MenuBar";

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
		const { container } = render(<MenuBar {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
