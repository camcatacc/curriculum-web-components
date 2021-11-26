// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import AbilityTitle from "atoms/Ability/AbilityTitle/AbilityTitle";

// Template
const Template: ComponentStory<typeof AbilityTitle> = (args) => <AbilityTitle {...args} />;

// Variants
export const Standard = Template.bind({});
Standard.args = {
	children: "This is a title"
};

// Export
export default {
	title: "Atoms/AbilityTitle",
	component: AbilityTitle
} as ComponentMeta<typeof AbilityTitle>;
