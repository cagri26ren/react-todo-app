import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import clickedReducer from './clickedReducer';

export default combineReducers({
  task: taskReducer,
  clicked: clickedReducer,
});
