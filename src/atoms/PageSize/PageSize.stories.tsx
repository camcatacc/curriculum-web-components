// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import PageSize from "atoms/PageSize/PageSize";

// Template
const Template: ComponentStory<typeof PageSize> = (args) => <PageSize {...args} />;

// Variants
export const Standard = Template.bind({});
Standard.args = {
	children: (
		<div className="w-full bg-pink-200">
			This div widht is the same than PageSize width. Its max should be the size of a xl screen. Try another device size and it will shrink and the padding be reduced
		</div>
	)
};

// Export
export default {
	title: "Atoms/PageSize",
	component: PageSize
} as ComponentMeta<typeof PageSize>;
