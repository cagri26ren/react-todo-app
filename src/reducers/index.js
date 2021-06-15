import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import clickedReducer from './clickedReducer';

export default combineReducers({
  todo: todoReducer,
  clicked: clickedReducer,
});
