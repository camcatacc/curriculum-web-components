import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SectionTitle from "molecules/SectionTitle/SectionTitle";

const Template: ComponentStory<typeof SectionTitle> = (args) => <SectionTitle {...args} />;

export const Standard = Template.bind({});

Standard.args = {
	children: "Section Title"
};

export default {
	title: "Molecules/SectionTitle",
	component: SectionTitle
} as ComponentMeta<typeof SectionTitle>;
