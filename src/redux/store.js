import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { listReducer } from './reducers/listReducer';
import groceries from '../groceries.json';
import { CHECKBOX_STATES } from './constants/checkboxConstants';

const defaultList = groceries.map(grocery => {
  return {
    ...grocery,
    items: grocery.items.map(item => {
      return {
        name: item,
        status: CHECKBOX_STATES.Empty
      };
    })
  }
});

const listInLocalStorage = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : defaultList;
const INITIAL_STATE = {
  list: listInLocalStorage
};

const reducer = combineReducers({
  list: listReducer
});
const middleware = [thunk];
const store = createStore(reducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
