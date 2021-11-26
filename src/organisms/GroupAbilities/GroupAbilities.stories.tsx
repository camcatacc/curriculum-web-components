import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GroupAbilities from "organisms/GroupAbilities/GroupAbilities";
import PageSize from "atoms/PageSize/PageSize";

import { Standard as AbilityStory } from "molecules/Ability/Ability.stories";
import type { AbilityProps } from "molecules/Ability/Ability";

const Template: ComponentStory<typeof GroupAbilities> = (args) => (
	<PageSize>
		<GroupAbilities {...args} />
	</PageSize>
);

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

export default {
	title: "Organisms/GroupAbilities",
	component: GroupAbilities
} as ComponentMeta<typeof GroupAbilities>;
