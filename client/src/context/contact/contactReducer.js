import {
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  CONTACT_ERROR,
  CLEAR_CONTACTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact._id !== action.payload,
        ),
        loading: false,
      };
    case CLEAR_CONTACTS: {
      return {
        ...state,
        contacts: null,
        filteredContacts: null,
        error: null,
      };
    }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact,
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        currentContact: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentContact: null,
      };
    case FILTER_CONTACT:
      return {
        ...state,
        filteredContacts: state.contacts.filter(contact => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return contact.name.match(regex) || contact.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredContacts: null,
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
