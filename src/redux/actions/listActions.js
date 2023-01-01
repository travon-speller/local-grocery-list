import { UPDATE_LIST } from "../constants/checkboxConstants";

export const updateList = (label, status) => (dispatch, getState) => {
  dispatch({ type: UPDATE_LIST, payload: { label, status } });
  console.log(label, status)
  localStorage.setItem('list', JSON.stringify(getState().list))
};
