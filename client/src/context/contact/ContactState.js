import React, { useReducer } from 'react';
import axios from 'axios';
import contactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACTS,
  CONTACT_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  DELETE_CONTACT,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: null,
    currentContact: null,
    filteredContacts: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const addContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/contacts', contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const deleteContact = async id => {
    try {
      await axios.delete(`api/contacts/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const updateContact = async contact => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `api/contacts/${contact._id}`,
        contact,
        config,
      );
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.msg,
      });
    }
  };

  const setCurrentContact = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact,
    });
  };

  const clearCurrentContact = contact => {
    dispatch({
      type: CLEAR_CURRENT,
    });
  };

  const filterContacts = text => {
    dispatch({
      type: FILTER_CONTACT,
      payload: text,
    });
  };

  const clearContactFilter = contact => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  const clearContacts = () => {
    dispatch({
      type: CLEAR_CONTACTS,
    });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        currentContact: state.currentContact,
        filteredContacts: state.filteredContacts,
        error: state.error,
        getContacts,
        addContact,
        deleteContact,
        updateContact,
        setCurrentContact,
        clearCurrentContact,
        filterContacts,
        clearContactFilter,
        clearContacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
