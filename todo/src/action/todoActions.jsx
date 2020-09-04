
import {
  ADD_TAB, DELETE_TASK, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DONE_TASK,
} from '../const';

export const editTaskView = (id) => {
  return {
    type: EDIT_TASK_VIEW,
    payload: id,
  };
};

export const editTaskInput = (id, inputValue) => ({
  type: EDIT_TASK_INPUT,
  payload: {
    id,
    inputValue,
  },
});

export const addTask = (inputValue, id) => ({
  type: ADD_TAB,
  payload: {
    id,
    inputValue,
  },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const doneTask = (id) => ({
  type: DONE_TASK,
  payload: id,
});
