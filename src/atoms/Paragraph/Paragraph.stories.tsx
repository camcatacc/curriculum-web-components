// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import Paragraph from "atoms/Paragraph/Paragraph";

// Template
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

// Variants
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

// Export
export default {
	title: "Atoms/Paragraph",
	component: Paragraph
} as ComponentMeta<typeof Paragraph>;
