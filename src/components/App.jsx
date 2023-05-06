import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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
      id: name.id,
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
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 20,
          padding: 30,
          color: '#010101',
        }}
      >
        {' '}
        <h2>Phonebook</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor={nanoid()}>
            Name
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Jacob Mercer"
              id={nanoid()}
              required
            />
          </label>
          <label htmlFor={nanoid()}>
            Number
            <input
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="+380675006070"
              id={nanoid()}
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts name</h3>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleFilter}
            id={nanoid()}
          />
          <ul>
            {visibleContacts.map(item => (
              <li key={item.id}>
                {item.name}: {item.number}
                <button
                  type="button"
                  onClick={() => {
                    this.removeContact(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
