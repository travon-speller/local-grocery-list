import { UPDATE_LIST } from '../constants/checkboxConstants';
import groceries from '../../groceries.json';
import { CHECKBOX_STATES } from '../constants/checkboxConstants';

const defaultList = groceries.map((grocery) => {
  return {
    ...grocery,
    items: grocery.items.map((item) => {
      return {
        name: item,
        status: CHECKBOX_STATES.Empty
      };
    })
  };
});

const listInLocalStorage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : defaultList;
const INITIAL_STATE = listInLocalStorage;

export const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LIST: {
      return action.payload.list;
    }
    default:
      return state;
  }
};
