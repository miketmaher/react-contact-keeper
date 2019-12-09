import React from 'react';
import AddContactForm from '../../components/contact/AddContactForm';
import ContactList from '../../components/contact/ContactList';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <AddContactForm />
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
