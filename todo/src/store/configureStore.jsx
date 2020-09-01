import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from '../reducers/index';

export const initialState = {
  tasks: JSON.parse(localStorage.getItem('todo')) || [],
  counter: JSON.parse(localStorage.getItem('todo')) || 0,
};

const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);

  if ([action.type].includes(result.type)) {
    localStorage.setItem('todo', JSON.stringify(getState().tasks));
  }
  return result;
};

export const store = createStore(reducer, initialState,
  applyMiddleware(localStorageMiddleware, logger));
