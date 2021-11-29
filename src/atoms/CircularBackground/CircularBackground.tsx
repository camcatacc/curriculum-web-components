// Modules
import React from "react";

// Styles
import * as Styled from "atoms/CircularBackground/CircularBackground.styled";

// Definitions
export interface CircularBackgroundProps {
	children: React.ReactNode;
	backgroundColor?: string;
	height?: string | number;
	width?: string | number;
	padding?: string | number;
}

// Element
const CircularBackground = ({ children, backgroundColor, height, width, padding }: CircularBackgroundProps) => {
	return (
		<Styled.Container data-testid="container" className="rounded-full relative flex" backgroundColor={backgroundColor} height={height} width={width} padding={padding}>
			<div className="h-full flex justify-center items-center">{children}</div>
			{/** This is a dummy so that the height is the same than the width */}
			<div style={{ marginTop: "100%" }} />
		</Styled.Container>
	);
};

export default CircularBackground;
