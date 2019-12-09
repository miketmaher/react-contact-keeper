import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const AddContactForm = () => {
  const contactContext = useContext(ContactContext);
  const {
    addContact,
    currentContact,
    clearCurrentContact,
    updateContact
  } = contactContext;
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  useEffect(() => {
    if (currentContact !== null) {
      setContact(currentContact);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, currentContact]);

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const onClearAll = () => {
    clearCurrentContact();
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!currentContact) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    });
    clearCurrentContact();
  };

  const { name, email, phone, type } = contact;

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {currentContact ? 'Update' : 'Add'} Contact
      </h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Phone"
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional{' '}
      <div>
        <input
          type="submit"
          value={currentContact ? 'Update Contact' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </div>
      {currentContact && (
        <div>
          <button onClick={onClearAll} className="btn btn-light btn-block">
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default AddContactForm;
