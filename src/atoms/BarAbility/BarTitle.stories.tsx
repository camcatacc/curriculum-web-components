// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import BarTitle from "atoms/BarAbility/BarTitle";

// Template
const Template: ComponentStory<typeof BarTitle> = (args) => (
	<div>
		<BarTitle {...args} />
	</div>
);

// Variants
export const Standard = Template.bind({});
Standard.args = {
	title: "Atoms/Next.js",
	fontColor: "black"
};

// Export
export default {
	title: "Atoms/BarTitle",
	component: BarTitle
} as ComponentMeta<typeof BarTitle>;
