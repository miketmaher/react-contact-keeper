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

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    default:
      return state;
  }
};
