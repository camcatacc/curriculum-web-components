// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import Bar from "atoms/BarAbility/Bar";

// Template
const Template: ComponentStory<typeof Bar> = (args) => (
	<div className="w-1/2">
		<Bar {...args} />
	</div>
);

// Variants
export const Standard = Template.bind({});
Standard.args = {
	backgroundColor: "#B2436B",
	percentage: 80
};

// Export
export default {
	title: "Atoms/Bar",
	component: Bar
} as ComponentMeta<typeof Bar>;
