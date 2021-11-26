import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageSize from "atoms/PageSize/PageSize";

const Template: ComponentStory<typeof PageSize> = (args) => <PageSize {...args} />;
export const Standard = Template.bind({});
Standard.args = {
	children: (
		<div className="w-full bg-pink-200">
			This div widht is the same than PageSize width. Its max should be the size of a xl screen. Try another device size and it will shrink and the padding be reduced
		</div>
	)
};

export default {
	title: "Atoms/PageSize",
	component: PageSize
} as ComponentMeta<typeof PageSize>;
