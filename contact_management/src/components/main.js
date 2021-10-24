import React, { Component, useState } from 'react';
import { AppForm } from './formstyle';

import {
	MainWrapper,
	ListTitle,
	EmptyList,
	ContactList,
	Contact,
	UserInfo,
	User,
	UserIcon,
	EditButton,
	EditLink,
	Edit,
	Delete,
} from './main.styleComponent';

export const Main = ({ contacts, handleDeleteContact }) => {
	return (
		<MainWrapper>
			<ListTitle>Contact List</ListTitle>
			{contacts.length === 0 ? (
				<EmptyList>List is empty</EmptyList>
			) : (
				<ContactList>
					{contacts.map((contact) => (
						<Contact key={contact.id}>
							<UserIcon>
								<User />
							</UserIcon>
							<UserInfo>
								<div>
									<h2>{contact.name}</h2>
									<p>{contact.phone}</p>
									<p>{contact.email}</p>
								</div>
							</UserInfo>
							<EditButton>
								<EditLink>
									<Edit />
								</EditLink>
								<Delete onClick={() => handleDeleteContact(contact._id)} />
							</EditButton>
						</Contact>
					))}
				</ContactList>
			)}
		</MainWrapper>
	);
};
