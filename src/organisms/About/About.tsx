// Modules
import React from "react";
import { useTheme } from "@material-ui/core";

// Utils
import getMotionFlipOptions from "utils/getMotionFlipOptions";
import { getMotionFromOutsideVariants } from "utils/getMotionFromOutsideOptions";

// Elements
import AvatarWithName from "molecules/AvatarWithName/AvatarWithName";

// Styles
import * as Styled from "organisms/About/About.styled";

// Definitions

export interface AboutProps {
	name: string;
	surname: string;
	paragraphs: React.ReactNode;
	image: string;
	animated?: boolean;
}

// Functions
const getTextMotionOptions = (animated?: boolean) => {
	if (!animated) return {};
	const { initial, animation } = getMotionFromOutsideVariants("fromRight");
	return {
		variants: { initial, animation },
		initial: "initial",
		whileInView: "animation",
		viewport: {
			once: true,
			margin: "-200px"
		}
	};
};

// Element
const About = ({ name, surname, paragraphs, image, animated = false }: AboutProps) => {
	const textMotionOptions = getTextMotionOptions(animated);
	const imageMotionOptions = getMotionFlipOptions(animated, {});

	return (
		<Styled.ParentContainer className="flex flex-col md:flex-row items-center">
			<Styled.FirstChildContainer {...imageMotionOptions} className="w-3/5 md:w-auto">
				<AvatarWithName name={name} surname={surname} image={image} />
			</Styled.FirstChildContainer>
			<Styled.SecondChildContainer {...textMotionOptions} className="mt-4 md:mt-0 flex gap-8 flex-col justify-center">
				{paragraphs}
			</Styled.SecondChildContainer>
		</Styled.ParentContainer>
	);
};

export default About;
