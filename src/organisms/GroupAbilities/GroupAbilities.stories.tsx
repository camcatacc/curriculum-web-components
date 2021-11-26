// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import GroupAbilities from "organisms/GroupAbilities/GroupAbilities";
import PageSize from "atoms/PageSize/PageSize";
import type { AbilityProps } from "molecules/Ability/Ability";

// Other Stories
import { Standard as AbilityStory } from "molecules/Ability/Ability.stories";

// Template
const Template: ComponentStory<typeof GroupAbilities> = (args) => (
	<PageSize>
		<GroupAbilities {...args} />
	</PageSize>
);

// Variants
export const Standard = Template.bind({});

Standard.args = {
	abilities: [
		AbilityStory.args as AbilityProps,
		AbilityStory.args as AbilityProps,
		AbilityStory.args as AbilityProps,
		AbilityStory.args as AbilityProps,
		AbilityStory.args as AbilityProps,
		AbilityStory.args as AbilityProps
	]
};

// Export
export default {
	title: "Organisms/GroupAbilities",
	component: GroupAbilities
} as ComponentMeta<typeof GroupAbilities>;
