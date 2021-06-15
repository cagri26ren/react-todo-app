import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import clickedReducer from './clickedReducer';

const reducers = {
  todoReducer,
  clickedReducer,
};

export default combineReducers(reducers);
