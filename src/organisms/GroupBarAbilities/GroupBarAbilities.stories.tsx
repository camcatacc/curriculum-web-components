// Modules
import React from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import GroupBarAbilities from "organisms/GroupBarAbilities/GroupBarAbilities";
import PageSize from "atoms/PageSize/PageSize";

// Other Stories
import { Standard as BarAbilityStory } from "molecules/BarAbility/BarAbility.stories";

// Definitions
import type { BarAbilityProps } from "molecules/BarAbility/BarAbility";

// Template
const Template: ComponentStory<typeof GroupBarAbilities> = (args) => (
	<PageSize>
		<GroupBarAbilities {...args} />
	</PageSize>
);

// Variants
export const Standard = Template.bind({});

Standard.args = {
	abilities: [
		BarAbilityStory.args as BarAbilityProps,
		BarAbilityStory.args as BarAbilityProps,
		BarAbilityStory.args as BarAbilityProps,
		BarAbilityStory.args as BarAbilityProps,
		BarAbilityStory.args as BarAbilityProps,
		BarAbilityStory.args as BarAbilityProps
	]
};

// Export
export default {
	title: "Organisms/GroupBarAbilities",
	component: GroupBarAbilities
} as ComponentMeta<typeof GroupBarAbilities>;
