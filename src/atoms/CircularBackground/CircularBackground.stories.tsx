import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CircularBackground from "atoms/CircularBackground/CircularBackground";
import { secondary } from "styles/customColors";

const Template: ComponentStory<typeof CircularBackground> = (args) => (
	<div className="flex">
		<CircularBackground {...args} />
	</div>
);

export const Standard = Template.bind({});
Standard.args = {
	children: <p style={{ color: "white", margin: "0.5rem" }}>This is a large circle</p>,
	backgroundColor: secondary
};

export default {
	title: "Atoms/CircularBackground",
	component: CircularBackground
} as ComponentMeta<typeof CircularBackground>;
