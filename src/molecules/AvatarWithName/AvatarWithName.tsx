// Modules
import React from "react";

// Elements
import AvatarName from "atoms/AvatarName/AvatarName";

// Styles
import * as Styled from "molecules/AvatarWithName/AvatarWithName.styled";

// Definitions
export interface AvatarWithNameProps {
	name: string;
	surname: string;
	image: string;
}

// Element
const AvatarWithName = ({ name, surname, image }: AvatarWithNameProps) => {
	return (
		<>
			<Styled.Container className="w-full relative mb-4">
				<img src={image} alt={name + surname} className="absolute top-0 left-0 bottom-0 right-0 rounded-full" />
			</Styled.Container>
			<AvatarName name={name} surname={surname} />
		</>
	);
};

export default AvatarWithName;
