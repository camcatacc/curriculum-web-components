// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Functions
import { getMotionFlipVariants } from "utils/getMotionFlipOptions";

// Elements
import AbilityDescription from "atoms/Ability/AbilityDescription/AbilityDescription";
import AbilityIcon from "atoms/Ability/AbilityIcon/AbilityIcon";
import AbilityTitle from "atoms/Ability/AbilityTitle/AbilityTitle";
import { motion } from "framer-motion";

// Definitions
export interface AbilityProps {
	title: string;
	description: React.ReactNode;
	icon: string;
	animated?: boolean;
	delay?: number;
}

// Components
const Ability = ({ title, description, icon, animated = false, delay }: AbilityProps) => {
	const variants = getMotionFlipVariants(animated, delay);
	return (
		<motion.div variants={variants} className="w-full h-full flex-col flex items-center">
			<div className="md:w-1/5 w-2/5">
				<AbilityIcon icon={icon} />
			</div>
			<div className="mt-4 mb-2">
				<AbilityTitle>{title}</AbilityTitle>
			</div>
			<AbilityDescription>{description}</AbilityDescription>
		</motion.div>
	);
};

export default Ability;
