import React, { Fragment, useContext } from 'react';
import Contact from './Contact';
import ContactContext from '../../context/contact/contactContext';

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default ContactList;
