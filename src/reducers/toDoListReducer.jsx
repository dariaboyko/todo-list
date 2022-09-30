import {
  ADD_TODO,
  DELETE_TODO,
  SET_PAGE,
  SEARCH_TODO,
  DELETE_ALL,
  FILTER_LIST,
} from '../actions/types';
const initialState = {
  currPage: 0,
  todoList: [
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'Hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
    {
      title: 'hello',
      desc: 'hshshshsh',
      date: '04.43.5432',
      done: true,
      key: Math.random(),
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [action.data].concat(state.todoList),
        currPage: 0,
        listToShow: [action.data].concat(state.todoList).slice(0, 5),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.key !== action.key),
        listToShow: state.todoList.filter(item => item.key !== action.key),
      };
    case SET_PAGE:
      let firstIndex = 0;
      let lastIndex = 5;
      for (let i = 0; i < action.data; i++) {
        firstIndex += 5;
        lastIndex += 5;
      }
      return {
        ...state,
        currPage: action.data,
        listToShow: state.todoList.slice(firstIndex, lastIndex),
      };
    case SEARCH_TODO:
      let firstI = 0;
      let lastI = 5;
      for (let i = 0; i < state.currPage; i++) {
        firstI += 5;
        lastI += 5;
      }
      return {
        ...state,
        listToShow: state.todoList
          .filter(item => item.title.includes(action.data))
          .slice(firstI, lastI),
      };
    case DELETE_ALL:
      return {
        ...state,
        todoList: [],
        listToShow: [],
      };
    case FILTER_LIST:
      let filteredList = [];
      let first = 0;
      let last = 5;
      for (let i = 0; i < state.currPage; i++) {
        first += 5;
        last += 5;
      }
      if (action.data === 'all') {
        filteredList = state.todoList.slice(first, last);
      }
      if (action.data === 'done') {
        filteredList = state.todoList
          .filter(item => item.done)
          .slice(first, last);
      }
      if (action.data === 'notdone') {
        filteredList = state.todoList
          .filter(item => !item.done)
          .slice(first, last);
      }
      return {
        ...state,
        listToShow: filteredList,
      };
    default:
      return state;
  }
};

export default todoReducer;
