// Modules
import React from "react";

// Elements
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField, Typography } from "@material-ui/core";
import ButtonWithState from "atoms/ButtonWithState/ButtonWithState";

// Styles
import * as Styled from "organisms/ContactMeForm/ContactMeForm.styled";

// Definitions
export interface ContactForm {
	name: string;
	surname: string;
	email: string;
	messageSubject: string;
	messageBody: string;
}

export type ContactFormButtonType = "cancel" | "send" | "save" | "sendWithError";
export interface ContactMeFormProps {
	openModal: boolean;
	handleModalClose: () => void;
	form: {
		name: string;
		surname: string;
		email: string;
		messageSubject: string;
		messageBody: string;
	};
	onFormChange: (type: keyof ContactForm, newValue: string) => void;
	onButtonClick: (type: ContactFormButtonType) => void;
	loading?: boolean;
	error?: string;
}

// Components
const ContactMeForm = ({ openModal, handleModalClose, form, onFormChange, onButtonClick, loading, error }: ContactMeFormProps) => (
	<Dialog open={openModal} onClose={handleModalClose} fullWidth>
		<DialogTitle>
			<Typography variant="h2" align="center">
				CONTACT ME
			</Typography>
		</DialogTitle>
		<DialogContent>
			<DialogContentText variant="body1" align="center">
				I will be glad to help ;)
			</DialogContentText>
			<div className="flex flex-col gap-3 mt-6">
				<TextField id="name" onChange={(ev) => onFormChange("name", ev.target.value)} value={form.name} variant="outlined" label="Name" />
				<TextField id="surname" onChange={(ev) => onFormChange("surname", ev.target.value)} value={form.surname} variant="outlined" label="Surname" />
				<TextField id="email" onChange={(ev) => onFormChange("email", ev.target.value)} value={form.email} variant="outlined" label="Email" />
				<TextField id="messageSubject" onChange={(ev) => onFormChange("messageSubject", ev.target.value)} value={form.messageSubject} variant="outlined" label="Message Subject" />
				<TextField
					id="messageBody"
					onChange={(ev) => onFormChange("messageBody", ev.target.value)}
					value={form.messageBody}
					variant="outlined"
					rows={5}
					multiline
					label="Message Body"
				/>
			</div>
		</DialogContent>
		<DialogActions>
			<div className="flex items-center justify-center flex-col md:flex-row w-full md:w-auto">
				<ButtonWithState variant="text" loading={loading} disabled={loading} onClick={() => onButtonClick("sendWithError")}>
					Send with error
				</ButtonWithState>
				<Button color="secondary" onClick={() => onButtonClick("cancel")}>
					Cancel
				</Button>
				<Button variant="outlined" color="secondary" onClick={() => onButtonClick("save")}>
					Finish it later
				</Button>
				<ButtonWithState variant="contained" loading={loading} disabled={loading} onClick={() => onButtonClick("send")}>
					Send
				</ButtonWithState>
			</div>
		</DialogActions>
		{error && (
			<Styled.Error variant="body2" align="right" color="error">
				{error}
			</Styled.Error>
		)}
	</Dialog>
);
export default ContactMeForm;
