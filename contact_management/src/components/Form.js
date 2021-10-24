import React, { useState } from 'react';
import { Contact, Title, ContactForm, InputField, Button } from './formstyle';

export const AppForm = ({ title, buttonName, history, match, props }) => {
	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const [contact, setContact] = useState();

	return (
		<Contact>
			<Title>{title}</Title>
			<ContactForm>
				<InputField>
					<label htmlFor="">Name</label>
					<input type="text" name="name" />
				</InputField>
				<InputField>
					<label htmlFor="">Phone</label>
					<input type="text" name="phone" />
				</InputField>
				<InputField>
					<label htmlFor="">email</label>
					<input type="email" name="email" />
				</InputField>
				<Button type="submit" value="submit">
					{buttonName}
				</Button>
			</ContactForm>
		</Contact>
	);
};
