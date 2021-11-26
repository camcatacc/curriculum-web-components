// Modules
import React, { useState } from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import MenuElement from "atoms/MenuElement/MenuElement";

// Template
const Template: ComponentStory<typeof MenuElement> = (args) => {
	const [selected, setSelected] = useState(false);
	const onClicked = () => !selected && setSelected(true);
	return <MenuElement {...args} selected={selected} onClicked={onClicked} />;
};

// Variants
export const Standard = Template.bind({});
Standard.args = {
	title: "Menu Element",
	color: "black"
};

// Export
export default {
	title: "Atoms/MenuElement",
	component: MenuElement
} as ComponentMeta<typeof MenuElement>;
