// Modules
import React, { useState } from "react";

// Storybook Modules
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Elements
import ContactMeForm, { ContactForm, ContactFormButtonType } from "organisms/ContactMeForm/ContactMeForm";
import PageSize from "atoms/PageSize/PageSize";
import { Button } from "@material-ui/core";

// Default Props
const defaultForm = {
	name: "",
	surname: "",
	email: "",
	messageSubject: "",
	messageBody: ""
};

// Template
const Template: ComponentStory<typeof ContactMeForm> = (args) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [form, setForm] = useState<ContactForm>({
		name: "",
		surname: "",
		email: "",
		messageSubject: "",
		messageBody: ""
	});

	function onFormChange(type: keyof ContactForm, newValue: string) {
		const copiedForm = { ...form };
		copiedForm[type] = newValue;
		setForm(copiedForm);
	}

	function onButtonClick(type: ContactFormButtonType) {
		setError("");
		switch (type) {
			case "cancel":
				setForm(defaultForm);
				handleModalClose();
				return;
			case "save":
				handleModalClose();
				return;
			case "send":
				handleSend();
				return;
			case "sendWithError":
				handleSend(true);
				return;
		}
	}

	function handleModalClose() {
		setModalOpen(false);
	}

	function handleModalOpen() {
		setModalOpen(true);
	}

	async function handleSend(newError?: boolean) {
		setLoading(true);
		await resolveAfterMilliseconds(1000);
		setLoading(false);
		if (newError) {
			setError("There has been an error");
			return;
		}
		setModalOpen(false);
	}

	function resolveAfterMilliseconds(milliseconds: number) {
		return new Promise((resolve) => setTimeout(() => resolve(true), milliseconds));
	}

	return (
		<PageSize>
			<Button onClick={handleModalOpen} variant="contained" color="secondary">
				Open modal
			</Button>
			<ContactMeForm
				openModal={modalOpen}
				onFormChange={onFormChange}
				onButtonClick={onButtonClick}
				loading={loading}
				handleModalClose={handleModalClose}
				error={error}
				form={form}
			/>
		</PageSize>
	);
};

// Variants
export const Standard = Template.bind({});
Standard.args = {};

// Export
export default {
	title: "Organisms/ContactMeForm",
	component: ContactMeForm
} as ComponentMeta<typeof ContactMeForm>;
