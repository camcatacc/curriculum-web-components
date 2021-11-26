// Modules
import React from "react";

// Storybook
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import AbilityDescription from "atoms/Ability/AbilityDescription/AbilityDescription";

// Template
const Template: ComponentStory<typeof AbilityDescription> = (args) => <AbilityDescription {...args} />;

// Variants
export const Standard = Template.bind({});
Standard.args = {
	children: (
		<p>
			This ability is <b>the best</b> in its class
		</p>
	)
};

// Export
export default {
	title: "Atoms/AbilityDescription",
	component: AbilityDescription
} as ComponentMeta<typeof AbilityDescription>;
