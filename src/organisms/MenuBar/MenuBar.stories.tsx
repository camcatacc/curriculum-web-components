// Modules
import React, { useState } from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import MenuBar from "organisms/MenuBar/MenuBar";
import PageSize from "atoms/PageSize/PageSize";

// Template
const Template: ComponentStory<typeof MenuBar> = (args) => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<PageSize>
			<MenuBar {...args} darkModeChecked={darkMode} onSwitchChange={setDarkMode} />
		</PageSize>
	);
};

// Variants
export const Standard = Template.bind({});

Standard.args = {
	elements: [
		{ id: "home", name: "Home" },
		{ id: "about", name: "About" },
		{ id: "contact", name: "Contact" }
	],
	selectedId: "home"
};

// Export
export default {
	title: "Organisms/MenuBar",
	component: MenuBar
} as ComponentMeta<typeof MenuBar>;
