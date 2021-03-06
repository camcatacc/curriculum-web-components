// Modules
import styled from "styled-components";

// Elements
import { Typography as MaterialTypography } from "@material-ui/core";
import { motion } from "framer-motion";
// Components
export const ParentContainer = styled(motion.div)<{ $percentage: number; $backgroundColor: string }>`
	width: ${({ $percentage }) => $percentage}%;
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	height: "100%";
`;

export const Typography = styled(MaterialTypography)<{ fontSize: string | number; fontcolor: string }>`
	font-size: ${({ fontSize }) => fontSize};
	color: ${({ fontcolor }) => fontcolor};
`;
