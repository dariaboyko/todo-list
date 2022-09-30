import {ADD_TODO, DELETE_TODO, SET_PAGE, SEARCH_TODO, DELETE_ALL,FILTER_LIST} from './types';

export const addTODO = todo => ({
  type: ADD_TODO,
  data: todo,
});

export const deleteTODO = key => ({
  type: DELETE_TODO,
  key: key,
});

export const setPAGE = page => ({
  type: SET_PAGE,
  data: page,
});
export const searchTODO = todo => ({
  type: SEARCH_TODO,
  data: todo,
});
export const deleteALL = () => ({
  type: DELETE_ALL
});
export const filterLIST = type => ({
  type: FILTER_LIST,
  data: type,
});