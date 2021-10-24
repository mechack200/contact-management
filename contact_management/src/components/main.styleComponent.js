import styled from 'styled-components';
import { Title } from './formstyle';
import { Link } from 'react-router-dom';
import { ContactOptionMenu, MenuList } from './header';
import { FaUser, FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Fill } from 'react-icons/ri';
// import { InputField, Button, ContactForm } from './editContact';

export const ListTitle = styled(Title)``;
export const EmptyList = styled(Title)`
	box-shadow: none;
	color: red;
`;
export const EditButton = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
`;
export const EditLink = styled(Link)``;

export const Edit = styled(FaEdit)`
	font-size: 3rem;
	color: rgb(235, 211, 106);
`;
export const Delete = styled(RiDeleteBin6Fill)`
	font-size: 3rem;
	color: red;
`;
export const User = styled(FaUser)`
	font-size: 5rem;
	color: rgb(49, 72, 170);
`;
export const UserIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	padding: 2rem;
	border-right: 1px solid rgb(49, 72, 170);

	@media screen and (max-width: 1000px) {
		border-bottom: 1px solid rgb(49, 72, 170);
		border-right: none;
	}
`;
export const UserInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 0 2rem;

	p {
		color: grey;
	}
	@media screen and (max-width: 1000px) {
		border-bottom: 1px solid rgb(49, 72, 170);
	}
`;
export const MainWrapper = styled(ContactOptionMenu)`
	background-color: rgb(242, 248, 248);
	max-width: 500px;
	overflow: auto;
	width: 50%;
	height: auto;
	border: 1px solid grey;
	margin: 0 auto;
	margin-bottom: 4rem;
	padding: 4rem;
	margin-top: 2rem;
	box-shadow: 10px 5px 5px rgb(49, 72, 170);

	@media screen and (max-width: 700px) {
		width: 70%;
	}
`;

export const ContactList = styled(MenuList)`
	display: flex;
	flex-direction: row;
	padding: 1rem;
`;

export const Contact = styled.li`
	text-decoration: none;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin-top: 2rem;
	width: 90%;
	height: auto;
	background-color: white;
	box-shadow: 3px 3px 3px rgb(49, 72, 170);

	@media screen and (max-width: 1000px) {
		flex-direction: column;
		text-align: center;
	}
`;
