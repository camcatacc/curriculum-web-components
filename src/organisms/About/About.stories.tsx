import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import About from "organisms/About/About";
import AvatarImage from "stories/assets/avatar.jpg";
import Paragraph from "atoms/Paragraph/Paragraph";
import PageSize from "atoms/PageSize/PageSize";

const Template: ComponentStory<typeof About> = (args) => (
	<PageSize>
		<About {...args} />
	</PageSize>
);

export const Standard = Template.bind({});

Standard.args = {
	image: AvatarImage,
	name: "Pep",
	surname: "Guardiola",
	paragraphs: (
		<div className="flex flex-col gap-8">
			<Paragraph>
				I am a <b style={{ color: "#000243" }}>commited</b>, capable and resolutive person. I have skills, experience and formation as a{" "}
				<b style={{ color: "#000243" }}>developer</b>, which are very well complemented by my <b style={{ color: "#000243" }}>business background</b>.
			</Paragraph>
			<Paragraph>
				<p>
					I led an educational robotics and programming firm for five years. I devoted the last one and a half to ideate, design and develop an{" "}
					<b style={{ color: "#000243" }}>online solution in the form of a hybrid app</b> and a web platform.
				</p>
			</Paragraph>
			<Paragraph>
				<p>
					I am currently employed by Accenture as a <b style={{ color: "#545569" }}>full-stack developer</b>.
				</p>
			</Paragraph>
		</div>
	)
};

export default {
	title: "Organisms/About",
	component: About
} as ComponentMeta<typeof About>;
