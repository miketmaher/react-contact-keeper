import React, { Fragment, useContext } from 'react';
import Contact from './Contact';
import ContactContext from '../../context/contact/contactContext';

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filteredContacts } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact.</h4>;
  }

  return (
    <Fragment>
      {filteredContacts !== null
        ? filteredContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default ContactList;
