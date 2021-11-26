// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import CircularBackground from "atoms/CircularBackground/CircularBackground";

// Styles
import { secondary } from "styles/customColors";

// Template
const Template: ComponentStory<typeof CircularBackground> = (args) => (
	<div className="flex">
		<CircularBackground {...args} />
	</div>
);

// Variants
export const Standard = Template.bind({});
Standard.args = {
	children: <p style={{ color: "white", margin: "0.5rem" }}>This is a large circle</p>,
	backgroundColor: secondary
};

// Export
export default {
	title: "Atoms/CircularBackground",
	component: CircularBackground
} as ComponentMeta<typeof CircularBackground>;
