import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Paragraph from "atoms/Paragraph/Paragraph";

const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;
export const Body = Template.bind({});
Body.args = {
	children: "This is a body1 paragraph",
	variant: "body1"
};

export const Body2 = Template.bind({});
Body2.args = {
	children: "This is a body2 paragraph",
	variant: "body2"
};

export default {
	title: "Atoms/Paragraph",
	component: Paragraph
} as ComponentMeta<typeof Paragraph>;
