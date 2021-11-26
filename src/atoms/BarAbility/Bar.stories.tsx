import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Bar from "atoms/BarAbility/Bar";

const Template: ComponentStory<typeof Bar> = (args) => (
	<div className="w-1/2">
		<Bar {...args} />
	</div>
);

export const Standard = Template.bind({});
Standard.args = {
	backgroundColor: "#B2436B",
	percentage: 80
};

export default {
	title: "Atoms/Bar",
	component: Bar
} as ComponentMeta<typeof Bar>;
