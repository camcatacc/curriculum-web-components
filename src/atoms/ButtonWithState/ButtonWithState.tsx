// Modules
import React from "react";

// Elements
import { Box, Button } from "@material-ui/core";

// Styles
import * as Styled from "atoms/ButtonWithState/ButtonWithState.styled";

// Definitions
export interface ButtonWithStateProps {
	loading?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	children: any;
	variant?: "text" | "outlined" | "contained";
}

// Component
const ButtonWithState = ({ loading, onClick, disabled, variant, children }: ButtonWithStateProps) => (
	<Box sx={{ m: 1, position: "relative", width: "fit-content" }}>
		<Button disabled={disabled} color="secondary" variant={variant} onClick={onClick}>
			{children}
		</Button>
		{loading && <Styled.Progress size={24} />}
	</Box>
);

export default ButtonWithState;
