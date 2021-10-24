import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ComponentLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

export const ContactOptionMenu = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: rgb(49, 72, 170);
`;
export const MenuList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	list-style: none;
	text-decoration: none;
`;

const List = styled.div`
	text-transform: uppercase;
	margin-top: 2rem;
	padding: 1rem;
	:hover {
		color: black;
	}
`;

const SearchBar = styled.div`
	display: flex;
	background-color: white;
`;
const Input = styled.input`
	border: none;
	padding-left: 0.2rem;
`;
const SearchIcon = styled(FaSearch)`
	font-size: 2rem;
	padding: 0.2rem;
`;
export const Header = ({
	sort,
	sortContact,
	searchInput,
	searchContact,
	handleInputChange,
	viewALLContacts,
}) => {
	return (
		<ContactOptionMenu>
			<MenuList>
				<ComponentLink to="/">
					<List onClick={viewALLContacts}> view all contacts</List>
				</ComponentLink>
				<ComponentLink to="/addContact">
					{' '}
					<List> add a new contact</List>
				</ComponentLink>
				<List>
					<select onChange={sortContact}>
						<option value=" "> SORT CONTACTS</option>
						<option value="ASCENDING">ASCENDING</option>
						<option value="DESCENDING">DESCENDING</option>
					</select>
				</List>
				<List>
					<SearchBar>
						<Input
							name="searchInput"
							type="search"
							value={searchInput}
							onChange={searchContact}
							placeholder="search contact by name"
						/>
						<SearchIcon />
					</SearchBar>
				</List>
			</MenuList>
		</ContactOptionMenu>
	);
};
