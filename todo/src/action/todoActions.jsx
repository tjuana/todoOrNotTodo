import { store } from '../store/configureStore.jsx';
import {
  ADD_TAB, DELETE_TASK, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DONE_TASK,
} from '../const';

export const editTaskView = (id) => ({
  type: EDIT_TASK_VIEW,
  payload: id,
});

export const editTaskInput = (id, inputValue) => ({
  type: EDIT_TASK_INPUT,
  payload: {
    id,
    inputValue,
  },
});

export const addTask = (inputValue) => {
  const { tasks } = store.getState();
  const id = tasks.length
    ? tasks.reduce((prev, cur) => (cur.id >= prev.id ? cur : prev),
      { id: -Infinity }).id + 1 : 0;
  return {
    type: ADD_TAB,
    payload: {
      id,
      inputValue,
    },
  };
};

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const doneTask = (id) => ({
  type: DONE_TASK,
  payload: id,
});
