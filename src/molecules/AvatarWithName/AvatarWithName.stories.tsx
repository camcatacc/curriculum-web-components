import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AvatarWithName from "molecules/AvatarWithName/AvatarWithName";
import AvatarImage from "stories/assets/avatar.jpg";

const Template: ComponentStory<typeof AvatarWithName> = (args) => (
	<div className="w-full md:w-1/4">
		<AvatarWithName {...args} />
	</div>
);

export const Standard = Template.bind({});
Standard.args = {
	name: "Johan",
	surname: "Cruyff",
	image: AvatarImage
};

export default {
	title: "Molecules/AvatarWithName",
	component: AvatarWithName
} as ComponentMeta<typeof AvatarWithName>;
