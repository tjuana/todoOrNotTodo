import { store } from '../store/configureStore.jsx';
import {
  ADD_TAB, DELETE_TASK, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DONE_TASK,
} from '../const';

export const editTaskView = (id) => {
  let { tasks } = store.getState();
  tasks = tasks.map((task) => (task.id === id
    ? { ...task, isEditMode: !task.isEditMode }
    : task));

  return {
    type: EDIT_TASK_VIEW,
    payload: tasks,
  };
};

export const editTaskInput = (id, inputValue) => {
  let { tasks } = store.getState();
  tasks = tasks.map((task) => (task.id === id
    ? { ...task, title: inputValue }
    : task));

  return {
    type: EDIT_TASK_INPUT,
    payload: tasks,
  };
};

export const addTask = (inputValue, id) => {
  const { tasks } = store.getState();

  return {
    type: ADD_TAB,
    payload: [
      ...tasks,
      {
        id,
        title: inputValue,
        isDone: false,
        isEditMode: false,
      },
    ].sort((a) => (a.isDone ? 1 : -1)),
  };
};

export const deleteTask = (id) => {
  const { tasks } = store.getState();

  return {
    type: DELETE_TASK,
    payload: tasks.filter((task) => id !== task.id),
  };
};

export const doneTask = (id) => {
  const { tasks } = store.getState();

  return {
    type: DONE_TASK,
    payload: tasks.map((task) => (
      task.id === id
        ? { ...task, isDone: !task.isDone }
        : task)).sort((a) => (a.isDone ? 1 : -1)),
  };
};
