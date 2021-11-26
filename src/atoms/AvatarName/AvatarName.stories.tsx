// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import AvatarName from "atoms/AvatarName/AvatarName";

// Template
const Template: ComponentStory<typeof AvatarName> = (args) => <AvatarName {...args} />;

// Variants
export const Standard = Template.bind({});
Standard.args = {
	name: "Name",
	surname: "Surname1 Surname2"
};

// Export
export default {
	title: "Atoms/AvatarName",
	component: AvatarName
} as ComponentMeta<typeof AvatarName>;
