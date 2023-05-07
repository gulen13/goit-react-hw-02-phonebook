import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.target.elements;
    const { contacts } = this.state;

    const existingName = contacts.some(item => item.name === name.value);
    const existingNumber = contacts.find(item => item.number === number.value);

    if (existingName) {
      return alert(`Contact "${name.value}" is already in contacts list`);
    } else if (existingNumber) {
      return alert(`Number "${number.value}" is already in contacts list`);
    }

    const newContact = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm formSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          filterChange={this.handleFilter}
        />
        <ContactList
          data={visibleContacts}
          onDelete={this.removeContact}
        />
      </Container>
    );
  }
}
