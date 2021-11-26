import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AbilityTitle from "atoms/Ability/AbilityTitle/AbilityTitle";

const Template: ComponentStory<typeof AbilityTitle> = (args) => <AbilityTitle {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	children: "This is a title"
};

export default {
	title: "Atoms/AbilityTitle",
	component: AbilityTitle
} as ComponentMeta<typeof AbilityTitle>;
