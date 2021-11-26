// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import AvatarWithName from "molecules/AvatarWithName/AvatarWithName";
import AvatarImage from "stories/assets/avatar.jpg";

// Template
const Template: ComponentStory<typeof AvatarWithName> = (args) => (
	<div className="w-full md:w-1/4">
		<AvatarWithName {...args} />
	</div>
);

// Variants
export const Standard = Template.bind({});
Standard.args = {
	name: "Johan",
	surname: "Cruyff",
	image: AvatarImage
};

// Export
export default {
	title: "Molecules/AvatarWithName",
	component: AvatarWithName
} as ComponentMeta<typeof AvatarWithName>;
