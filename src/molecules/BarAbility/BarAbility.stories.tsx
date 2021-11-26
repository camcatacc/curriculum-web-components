// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import BarAbility from "molecules/BarAbility/BarAbility";

// Template
const Template: ComponentStory<typeof BarAbility> = (args) => (
	<div className="w-full md:w-1/2">
		<BarAbility {...args} />
	</div>
);

// Variants
export const Standard = Template.bind({});
Standard.args = {
	name: "Next.js",
	barColor: "#B2436B",
	percentage: 80,
	titleColor: "#E25487"
};

// Export
export default {
	title: "Molecules/BarAbility",
	component: BarAbility
} as ComponentMeta<typeof BarAbility>;
