// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Accessibility
import { axe, toHaveNoViolations } from "jest-axe";

// Elements
import GroupBarAbilities from "organisms/GroupBarAbilities/GroupBarAbilities";

// Definitions
import type { GroupBarAbilitiesProps } from "organisms/GroupBarAbilities/GroupBarAbilities";

// Default Props
const defaultProps: GroupBarAbilitiesProps = {
	abilities: [
		{ percentage: 80, name: "Cool", titleColor: "red", barColor: "blue" },
		{ percentage: 80, name: "Cool 2", titleColor: "red", barColor: "blue" }
	],
	barColor: "white",
	title: "Coolest abilities",
	titleColor: "red"
};

// Tests
expect.extend(toHaveNoViolations);
describe("GroupBarAbilities", () => {
	it("Renders as expected and has no accessibility violations", async () => {
		const { container } = customRender(<GroupBarAbilities {...defaultProps} />);
		expect(container).toMatchSnapshot();
		expect(await axe(container)).toHaveNoViolations();
	});
});
