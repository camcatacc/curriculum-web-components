// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import Ability from "molecules/Ability/Ability";

// Other stories
import { Standard as AbilityIconStory } from "atoms/Ability/AbilityIcon/AbilityIcon.stories";

// Template
const Template: ComponentStory<typeof Ability> = (args) => (
	<div className="w-full md:w-1/3">
		<Ability {...args} />
	</div>
);

// Variants
export const Standard = Template.bind({});
Standard.args = {
	title: "This is a very good ability",
	description: (
		<p className="text-center">
			And this is quite a <b>fitting description</b> for such a good ability
		</p>
	),
	icon: AbilityIconStory.args?.icon
};

// Export
export default {
	title: "Molecules/Ability",
	component: Ability
} as ComponentMeta<typeof Ability>;
