import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MenuElement from "atoms/MenuElement/MenuElement";

const Template: ComponentStory<typeof MenuElement> = (args) => {
	const [selected, setSelected] = useState(false);
	const onClicked = () => !selected && setSelected(true);
	return <MenuElement {...args} selected={selected} onClicked={onClicked} />;
};

export const Standard = Template.bind({});
Standard.args = {
	title: "Atoms/Menu element 1",
	color: "black"
};

export default {
	title: "Atoms/MenuElement",
	component: MenuElement
} as ComponentMeta<typeof MenuElement>;
