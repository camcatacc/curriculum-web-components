// Modules
import styled from "styled-components";

// Definitions
import type { CircularBackgroundProps } from "atoms/CircularBackground/CircularBackground";

// Components
export const Container = styled.div<Omit<CircularBackgroundProps, "children">>`
	background-color: ${({ backgroundColor }) => backgroundColor};
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	padding: ${({ padding }) => padding};
`;
