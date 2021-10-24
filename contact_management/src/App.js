import './App.css';
import axios from 'axios';
import { Header } from './components/header';
import { Main } from './components/main';
import { Component } from 'react';
import data from './data.json';
import uuid from 'react-uuid';
import { AppForm } from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer';
import { AddContact } from './pages/addcontact.page';
import { ContactForm } from './components/formstyle';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			contacts: data.contacts,
			name: '',
			email: '',
			phone: '',
			contactList: [],
			sortType: 'DESCENDING',
			searchInput: '',
		};
	}
	componentDidMount() {
		console.log(data.contacts);
	}

	handleDeleteContact = (id) => {
		const contacts = this.state.contacts;
		const filterContacts = contacts.filter((contact) => contact._id !== id);
		this.setState({ contacts: filterContacts });
	};

	searchContact = (e) => {
		this.setState({ searchInput: e.target.value });
		const filterContact = this.state.contacts.filter((item) => {
			return item.name
				.toLowerCase()
				.includes(this.state.searchInput.toLowerCase());
		});
		this.setState({ contactList: filterContact });
	};

	viewALLContacts = () => {
		const contacts = this.state.contacts;
		this.setState({ contacts: contacts });
	};

	// sort contact
	sortContact = (e) => {
		console.log(e.target.value);
		const { contacts, sortType } = this.state;
		const sortedContacted = contacts.sort((a, b) => {
			const isReversed = sortType === 'DESCENDING' ? 1 : -1;
			return isReversed * a.name.localeCompare(b.name);
		});
		this.setState({ sortType: e.target.value, contacts: sortedContacted });
	};

	render() {
		const { name, phone, email, contacts, sortType, searchInput } = this.state;
		const filterContact = contacts.filter((item) => {
			return item.name
				.toLowerCase()
				.includes(this.state.searchInput.toLowerCase());
		});
		return (
			<Router>
				<div className="app">
					<Header
						searchContact={this.searchContact}
						searchInput={searchInput}
						sort={sortType}
						viewALLContacts={this.viewALLContacts}
						sortContact={this.sortContact}
						handleInputChange={this.handleInputChange}
					/>
					<Switch>
						<Route exact path="/">
							<Main
								contacts={filterContact}
								handleDeleteContact={this.handleDeleteContact}
							/>
						</Route>
						<Route path="/addcontact">
							<AddContact />
						</Route>
					</Switch>
					{/* <Footer /> */}
				</div>
			</Router>
		);
	}
}

export default App;
