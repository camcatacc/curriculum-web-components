// Modules
import React, { useState } from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import ButtonWithState from "atoms/ButtonWithState/ButtonWithState";

// Template
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

// Variants
export const Standard = Template.bind({});
Standard.args = {
	variant: "contained",
	children: "Click me"
};

// Export
export default {
	title: "Atoms/ButtonWithState",
	component: ButtonWithState
} as ComponentMeta<typeof ButtonWithState>;
