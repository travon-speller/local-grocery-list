import { UPDATE_LIST } from '../constants/checkboxConstants';

const getListItemIndex = (list, label) => {
  let indexies = {};
  indexies.categoryIndex = Object.values(list).findIndex((x) => {
    const itemIndex = x.items.findIndex((item) => item.name === label);
    if (itemIndex >= 0) indexies.itemIndex = itemIndex;
    return itemIndex >= 0;
  });
  return indexies;
};

export const updateList = (label, status) => async (dispatch, getState) => {
  const index = getListItemIndex(getState().list, label);
  const list = getState().list;

  list[index.categoryIndex].items[index.itemIndex].status = status;
  localStorage.setItem('list', JSON.stringify(list));

  dispatch({ type: UPDATE_LIST, payload: { list: list } });
};
