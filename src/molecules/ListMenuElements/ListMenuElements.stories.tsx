import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListMenuElements from "molecules/ListMenuElements/ListMenuElements";

const Template: ComponentStory<typeof ListMenuElements> = (args) => <ListMenuElements {...args} />;

export const Standard = Template.bind({});

Standard.args = {
	menuElements: [
		{ id: "home", name: "Home", color: "black" },
		{ id: "about", name: "About", color: "black" },
		{ id: "abilities", name: "Abilities", color: "black" }
	],
	selectedId: "about"
};

export default {
	title: "Molecules/ListMenuElements",
	component: ListMenuElements
} as ComponentMeta<typeof ListMenuElements>;
