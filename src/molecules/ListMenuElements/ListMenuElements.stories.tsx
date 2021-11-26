// Modules
import React, { useState } from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import ListMenuElements from "molecules/ListMenuElements/ListMenuElements";

// Template
const Template: ComponentStory<typeof ListMenuElements> = (args) => <ListMenuElements {...args} />;

// Variants
export const Standard = Template.bind({});

Standard.args = {
	menuElements: [
		{ id: "home", name: "Home", color: "black" },
		{ id: "about", name: "About", color: "black" },
		{ id: "abilities", name: "Abilities", color: "black" }
	],
	selectedId: "about"
};

// Export
export default {
	title: "Molecules/ListMenuElements",
	component: ListMenuElements
} as ComponentMeta<typeof ListMenuElements>;
