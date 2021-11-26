import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BarAbility from "molecules/BarAbility/BarAbility";
import { secondary } from "styles/customColors";

const Template: ComponentStory<typeof BarAbility> = (args) => (
	<div className="w-full md:w-1/2">
		<BarAbility {...args} />
	</div>
);

export const Standard = Template.bind({});
Standard.args = {
	name: "Next.js",
	barColor: "#B2436B",
	percentage: 80,
	titleColor: "#E25487"
};

export default {
	title: "Molecules/BarAbility",
	component: BarAbility
} as ComponentMeta<typeof BarAbility>;
