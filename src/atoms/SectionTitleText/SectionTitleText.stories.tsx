// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import SectionTitleText from "atoms/SectionTitleText/SectionTitleText";

// Template
const Template: ComponentStory<typeof SectionTitleText> = (args) => <SectionTitleText {...args} />;

// Variants
export const Standard = Template.bind({});
Standard.args = {
	children: "This is a Section Title"
};

// Export
export default {
	title: "Atoms/SectionTitleText",
	component: SectionTitleText
} as ComponentMeta<typeof SectionTitleText>;
