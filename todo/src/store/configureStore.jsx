import { createStore, applyMiddleware } from 'redux';
import todoReducer from '../redux/todoReducers';

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
export const store = createStore(todoReducer, initialState,
  applyMiddleware(localStorageMiddleware));
