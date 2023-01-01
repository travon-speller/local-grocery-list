import { UPDATE_LIST } from "../constants/checkboxConstants";

const INITIAL_STATE = {
  cartItems: []
};

export const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_LIST: { // find item in list and update the status

    }
    default:
      return state;
  }
};
