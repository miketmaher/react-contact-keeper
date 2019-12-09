import React from 'react';
import ContactList from '../../components/contact/ContactList';

const Home = () => {
  return (
    <div className="grid-2">
      <div>{/* FORM */}</div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default Home;
