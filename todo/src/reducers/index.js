import { combineReducers } from 'redux';
import tasks from './todoReducers';
import counter from './counter';

export default combineReducers({
  tasks,
  counter,
});
