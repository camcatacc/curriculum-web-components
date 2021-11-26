import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AbilityDescription from "atoms/Ability/AbilityDescription/AbilityDescription";

const Template: ComponentStory<typeof AbilityDescription> = (args) => <AbilityDescription {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	children: (
		<p>
			This ability is <b>the best</b> in its class
		</p>
	)
};

export default {
	title: "Atoms/AbilityDescription",
	component: AbilityDescription
} as ComponentMeta<typeof AbilityDescription>;
