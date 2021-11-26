// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import SectionTitleDivider from "atoms/SectionTitleDivider/SectionTitleDivider";

// Template
const Template: ComponentStory<typeof SectionTitleDivider> = (args) => <SectionTitleDivider {...args} />;

// Variants
export const Standard = Template.bind({});
Standard.args = {};

// Export
export default {
	title: "Atoms/SectionTitleDivider",
	component: SectionTitleDivider
} as ComponentMeta<typeof SectionTitleDivider>;
