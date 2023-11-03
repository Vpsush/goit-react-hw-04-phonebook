import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter/Filter';

const contactData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(contactData);

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactData;
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleAddContact = ({ name, number }) => {
    const hasDuplicate = contacts.find(contact => contact.name === name);
    if (hasDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, finalContact]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <section>
        <ContactForm handleAddContact={handleAddContact} />
      </section>
      <section>
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
      </section>
      {filteredContacts.map(contact => (
        <ContactList
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
}

// import React, { Component } from 'react';
// import Form from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import { nanoid } from 'nanoid';
// import Filter from 'components/Filter/Filter';

// const contactData = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export class App extends Component {
//   state = {
//     contacts: contactData,
//     filter: '',
//   };
//   componentDidMount() {
//     const stringifiedContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(stringifiedContacts) ?? contactData;
//     this.setState({ contacts: parsedContacts });
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       const stringifiedContacts = JSON.stringify(this.state.contacts);
//       localStorage.setItem('contacts', stringifiedContacts);
//     }
//   }

//   handleDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   handleAddContact = nameData => {
//     const hasDuplicate = this.state.contacts.find(
//       contact => contact.name === nameData.name
//     );
//     if (hasDuplicate) {
//       alert(`${nameData.name} is already in contacts`);
//       return;
//     }

//     const finalContact = {
//       ...nameData,
//       id: nanoid(),
//     };

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, finalContact],
//     }));
//   };

//   handleFilterChange = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const allLetterFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(allLetterFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <div>
//         <section>
//           <Form handleAddContact={this.handleAddContact} />
//         </section>
//         <section>
//           <Filter
//             value={this.state.filter}
//             onChange={this.handleFilterChange}
//           />
//         </section>
//         {filteredContacts.map(contact => (
//           <ContactList
//             key={contact.id}
//             id={contact.id}
//             name={contact.name}
//             number={contact.number}
//             handleDeleteContact={this.handleDeleteContact}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
