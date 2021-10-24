import styled from 'styled-components';

export const Contact = styled.div`
	max-width: 500px;
	width: 50%;
	height: auto;
	border: 1px solid grey;
	margin: 0 auto;
	padding: 4rem;
	margin-top: 2rem;
	box-shadow: 3px 3px 3px rgb(49, 72, 170);
	margin-bottom: 6rem;

	@media screen and (max-width: 500px) {
		width: 70%;
	}
`;
export const Title = styled.h1`
	text-transform: uppercase;
	text-align: center;
	font-size: 2rem;
	color: rgb(49, 72, 170);
	box-shadow: 3px 3px 3px rgb(49, 72, 170);
`;

export const ContactForm = styled.form`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
`;
export const InputField = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;

	label {
		text-transform: capitalize;
		text-align: center;
		padding: 1rem;
	}
	input {
		padding: 1rem;
		box-shadow: 3px 3px 3px rgb(49, 72, 170);
	}
`;
export const Button = styled.button`
	width: 50%;
	display: inline-block;
	color: white;
	padding: 1rem;
	margin: 0 auto;
	text-transform: uppercase;
	border-radius: 1rem;
	display: block;
	background-color: rgb(49, 72, 170); ;
`;
