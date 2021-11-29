// Modules
import React from "react";
import { customRender } from "utils/customRender";

// Elements
import GroupBarAbilities from "organisms/GroupBarAbilities/GroupBarAbilities";

// Definitions
import type { GroupBarAbilitiesProps } from "organisms/GroupBarAbilities/GroupBarAbilities";

// Default Props
const defaultProps: GroupBarAbilitiesProps = {
	abilities: [
		{ percentage: 80, name: "Cool" },
		{ percentage: 80, name: "Cool 2" }
	],
	barColor: "white",
	title: "Coolest abilities",
	titleColor: "red"
};

// Tests
describe("GroupBarAbilities", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<GroupBarAbilities {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});
});
