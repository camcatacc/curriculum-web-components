import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SectionTitleText from "atoms/SectionTitleText/SectionTitleText";

const Template: ComponentStory<typeof SectionTitleText> = (args) => <SectionTitleText {...args} />;
export const Standard = Template.bind({});
Standard.args = {
	children: "This is a Section Title"
};

export default {
	title: "Atoms/SectionTitleText",
	component: SectionTitleText
} as ComponentMeta<typeof SectionTitleText>;
