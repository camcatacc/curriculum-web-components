import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuBar from "organisms/MenuBar/MenuBar";
import PageSize from "atoms/PageSize/PageSize";

import { Standard as ListMenuElementsStory } from "molecules/ListMenuElements/ListMenuElements.stories";
import type { ListMenuElementsProps } from "molecules/ListMenuElements/ListMenuElements";

const Template: ComponentStory<typeof MenuBar> = (args) => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<PageSize>
			<MenuBar {...args} darkModeChecked={darkMode} onSwitchChange={setDarkMode} />
		</PageSize>
	);
};

export const Standard = Template.bind({});

Standard.args = {
	elements: [
		{ id: "home", name: "Home" },
		{ id: "about", name: "About" },
		{ id: "contact", name: "Contact" }
	],
	selectedId: "home"
};

export default {
	title: "Organisms/MenuBar",
	component: MenuBar
} as ComponentMeta<typeof MenuBar>;
