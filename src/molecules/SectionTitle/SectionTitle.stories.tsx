// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import SectionTitle from "molecules/SectionTitle/SectionTitle";

// Template
const Template: ComponentStory<typeof SectionTitle> = (args) => <SectionTitle {...args} />;

// Variants
export const Standard = Template.bind({});

Standard.args = {
	children: "Section Title"
};

// Export
export default {
	title: "Molecules/SectionTitle",
	component: SectionTitle
} as ComponentMeta<typeof SectionTitle>;
