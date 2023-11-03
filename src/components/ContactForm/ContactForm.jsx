// import React from 'react';
// import css from './ContactForm.module.css';
// import { Component } from 'react';

// export default class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.handleAddContact(this.state);
//   };

//   handleInputChange = e => {
//     const value = e.target.value;
//     const name = e.target.name;
//     this.setState({
//       [name]: value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2 className={css.title}>Phonebook</h2>
//         <div className={css.container}>
//           <form onSubmit={this.handleSubmit} className={css.form}>
//             <label>
//               <p className={css.name}>Name</p>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={this.handleInputChange}
//                 required
//                 pattern={
//                   "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 }
//                 value={this.state.name}
//               />
//             </label>
//             <label>
//               <p className={css.name}>Number</p>
//               <input
//                 type="tel"
//                 name="number"
//                 onChange={this.handleInputChange}
//                 required
//                 pattern={
//                   '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
//                 }
//                 title="xxx-xx-xx"
//                 value={this.state.number}
//               />
//             </label>
//             <button type="submit" className={css.btn}>
//               Add contact
//             </button>
//           </form>
//         </div>
//         <h2 className={css.title}>Contacts</h2>
//         <h3 className={css.title}>Find contacts by number</h3>
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ handleAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChangeNa = e => {
    setName(e.target.value);
  };

  const handleInputChangeNu = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <div className={css.container}>
        <form onSubmit={handleSubmit} className={css.form}>
          <label>
            <p className={css.name}>Name</p>
            <input
              type="text"
              name="name"
              onChange={handleInputChangeNa}
              required
              pattern={
                "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zAZа-яА-Я]*)*$"
              }
              value={name}
            />
          </label>
          <label>
            <p className={css.name}>Number</p>
            <input
              type="tel"
              name="number"
              onChange={handleInputChangeNu}
              required
              pattern={
                '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
              }
              title="xxx-xx-xx"
              value={number}
            />
          </label>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </form>
      </div>
      <h2 className={css.title}>Contacts</h2>
      <h3 className={css.title}>Find contacts by number</h3>
    </div>
  );
}
