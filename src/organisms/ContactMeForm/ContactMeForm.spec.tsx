// Modules
import React from "react";
import { fireEvent } from "@testing-library/react";
import { customRender } from "utils/customRender";

// Elements
import ContactMeForm from "organisms/ContactMeForm/ContactMeForm";

// Definitions
import type { ContactMeFormProps } from "organisms/ContactMeForm/ContactMeForm";

// Default Props
const defaultProps: ContactMeFormProps = {
	form: {
		email: "",
		messageBody: "",
		messageSubject: "",
		name: "",
		surname: ""
	},
	handleModalClose: jest.fn(),
	onButtonClick: jest.fn(),
	onFormChange: jest.fn(),
	openModal: true
};

// Tests
describe("ContactMeForm", () => {
	it("Renders as expected", () => {
		const { container } = customRender(<ContactMeForm {...defaultProps} />);
		expect(container).toMatchSnapshot();
	});

	it("Calls onFormChange when name input changes", () => {
		const { getByLabelText } = customRender(<ContactMeForm {...defaultProps} />);
		const nameInput = getByLabelText("Name");
		fireEvent.change(nameInput, { target: { value: "David" } });
		expect(defaultProps.onFormChange).toHaveBeenCalled();
	});

	it("Calls onFormChange when surname input changes", () => {
		const { getByLabelText } = customRender(<ContactMeForm {...defaultProps} />);
		const surnameInput = getByLabelText("Surname");
		fireEvent.change(surnameInput, { target: { value: "Camacho" } });
		expect(defaultProps.onFormChange).toHaveBeenCalled();
	});

	it("Calls onFormChange when email input changes", () => {
		const { getByLabelText } = customRender(<ContactMeForm {...defaultProps} />);
		const emailInput = getByLabelText("Email");
		fireEvent.change(emailInput, { target: { value: "a@a.com" } });
		expect(defaultProps.onFormChange).toHaveBeenCalled();
	});

	it("Calls onFormChange when messageSubject input changes", () => {
		const { getByLabelText } = customRender(<ContactMeForm {...defaultProps} />);
		const subjectInput = getByLabelText("Message Subject");
		fireEvent.change(subjectInput, { target: { value: "Hello" } });
		expect(defaultProps.onFormChange).toHaveBeenCalled();
	});

	it("Calls onFormChange when messageBody input changes", () => {
		const { getByLabelText } = customRender(<ContactMeForm {...defaultProps} />);
		const messageInput = getByLabelText("Message Body");
		fireEvent.change(messageInput, { target: { value: "Hello, it's time to go" } });
		expect(defaultProps.onFormChange).toHaveBeenCalled();
	});
	it("Calls onButtonClick when Send with error is clicked", () => {
		const { getByText } = customRender(<ContactMeForm {...defaultProps} />);
		const button = getByText("Send with error");
		fireEvent.click(button);
		expect(defaultProps.onButtonClick).toHaveBeenCalled();
	});
	it("Calls onButtonClick when Cancel is clicked", () => {
		const { getByText } = customRender(<ContactMeForm {...defaultProps} />);
		const button = getByText("Cancel");
		fireEvent.click(button);
		expect(defaultProps.onButtonClick).toHaveBeenCalled();
	});
	it("Calls onButtonClick when Finish it later is clicked", () => {
		const { getByText } = customRender(<ContactMeForm {...defaultProps} />);
		const button = getByText("Finish it later");
		fireEvent.click(button);
		expect(defaultProps.onButtonClick).toHaveBeenCalled();
	});
	it("Calls onButtonClick when Send is clicked", () => {
		const { getByText } = customRender(<ContactMeForm {...defaultProps} />);
		const button = getByText("Send");
		fireEvent.click(button);
		expect(defaultProps.onButtonClick).toHaveBeenCalled();
	});
	it("Shows an error if passed", () => {
		const errorProp = "There was an error";
		const { getByText } = customRender(<ContactMeForm {...defaultProps} error={errorProp} />);
		const error = getByText(errorProp);
		expect(error).toBeInTheDocument();
	});
});
