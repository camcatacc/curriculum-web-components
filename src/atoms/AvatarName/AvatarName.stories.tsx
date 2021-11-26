import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AvatarName from "atoms/AvatarName/AvatarName";

const Template: ComponentStory<typeof AvatarName> = (args) => <AvatarName {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	name: "Name",
	surname: "Surname1 Surname2"
};

export default {
	title: "Atoms/AvatarName",
	component: AvatarName
} as ComponentMeta<typeof AvatarName>;
