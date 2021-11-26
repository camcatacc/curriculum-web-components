import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import GroupBarAbilities from "organisms/GroupBarAbilities/GroupBarAbilities";
import PageSize from "atoms/PageSize/PageSize";

import { Standard as BarAbilityStory } from "molecules/BarAbility/BarAbility.stories";
import type { BarAbilityProps } from "molecules/BarAbility/BarAbility";

const Template: ComponentStory<typeof GroupBarAbilities> = (args) => (
	<PageSize>
		<GroupBarAbilities {...args} />
	</PageSize>
);

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

export default {
	title: "Organisms/GroupBarAbilities",
	component: GroupBarAbilities
} as ComponentMeta<typeof GroupBarAbilities>;
