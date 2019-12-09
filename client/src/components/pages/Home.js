import React from 'react';
import AddContactForm from '../../components/contact/AddContactForm';
import ContactList from '../../components/contact/ContactList';
import ContactFilter from '../../components/contact/ContactFilter';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <AddContactForm />
      </div>
      <div>
        <ContactFilter />
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
