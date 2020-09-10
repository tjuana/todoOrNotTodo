import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';

export const initialState = {
  tasks: JSON.parse(localStorage.getItem('todo')) || [],
};

const localStorageMiddleware = ({ getState }) => (next) => (action) => {
  const result = next(action);

  if ([action.type].includes(result.type)) {
    localStorage.setItem('todo', JSON.stringify(getState().tasks));
  }
  return result;
};

export const store = createStore(reducer, initialState,
  applyMiddleware(localStorageMiddleware));
