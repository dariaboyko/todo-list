import {createStore, combineReducers} from 'redux';
import todoReducer from './reducers/toDoListReducer.jsx';

const rootReducer = combineReducers({
  todoReducer: todoReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
