import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SectionTitleDivider from "atoms/SectionTitleDivider/SectionTitleDivider";

const Template: ComponentStory<typeof SectionTitleDivider> = (args) => <SectionTitleDivider {...args} />;
export const Standard = Template.bind({});
Standard.args = {};

export default {
	title: "Atoms/SectionTitleDivider",
	component: SectionTitleDivider
} as ComponentMeta<typeof SectionTitleDivider>;
