import React, { useState } from 'react';
// mport React, { useState } from 'react';
import { AppForm } from '../components/Form';
// import { EditContact } from './editContact.page';

export const AddContact = () => {
	return (
		<div>
			<AppForm title="add new contact" buttonName="save contact" />
		</div>
	);
};
