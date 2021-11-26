import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonWithState from "atoms/ButtonWithState/ButtonWithState";

const Template: ComponentStory<typeof ButtonWithState> = (args) => {
	const [loading, setLoading] = useState(false);

	function onClick() {
		setLoading(true);
		setLoadingFalseAfter2s();
	}

	const setLoadingFalseAfter2s = () => setTimeout(() => setLoading(false), 2000);

	return (
		<div>
			<ButtonWithState {...args} loading={loading} onClick={onClick} disabled={loading} />
		</div>
	);
};

export const Contained = Template.bind({});
Contained.args = {
	variant: "contained",
	children: "Click me"
};

export default {
	title: "Atoms/ButtonWithState",
	component: ButtonWithState
} as ComponentMeta<typeof ButtonWithState>;
