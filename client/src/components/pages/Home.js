import React, { useContext, useEffect } from 'react';
import AddContactForm from '../../components/contact/AddContactForm';
import ContactList from '../../components/contact/ContactList';
import ContactFilter from '../../components/contact/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

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
