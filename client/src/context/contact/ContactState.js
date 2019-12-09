import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  UPDATE_CONTACT,
  SET_ALERT,
  SET_CURRENT,
  REMOVE_ALERT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  DELETE_CONTACT
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        phone: '111-111-1111',
        email: 'jill@gmail.com',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        phone: '222-222-2222',
        email: 'saraj@gmail.com',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        phone: '333-333-3333',
        email: 'harry@gmail.com',
        type: 'professional'
      }
    ],
    currentContact: null,
    filteredContacts: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  const deleteContact = id => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  };

  const updateContact = contact => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    });
  };

  const setCurrentContact = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    });
  };

  const clearCurrentContact = contact => {
    dispatch({
      type: CLEAR_CURRENT
    });
  };

  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text
    });
  };

  const clearContactFilter = contact => {
    dispatch({
      type: CLEAR_FILTER
    });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filteredContacts: state.filteredContacts,
        addContact,
        deleteContact,
        updateContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearContactFilter
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
