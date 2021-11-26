import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BarTitle from "atoms/BarAbility/BarTitle";

const Template: ComponentStory<typeof BarTitle> = (args) => (
	<div>
		<BarTitle {...args} />
	</div>
);

export const Standard = Template.bind({});
Standard.args = {
	title: "Atoms/Next.js",
	fontColor: "black"
};

export default {
	title: "Atoms/BarTitle",
	component: BarTitle
} as ComponentMeta<typeof BarTitle>;
