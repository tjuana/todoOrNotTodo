import { store } from '../store/configureStore.jsx';
import {
  ADD_TAB, DELETE_TASK, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DONE_TASK, INIT,
} from '../const';

export const initStore = () => {
  const { tasks } = store.getState();
  return {
    type: INIT,
    tasks,
  };
};

export const editTaskView = (id) => {
  const { tasks } = store.getState();
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].editing = !tasks[index].editing;

  return {
    type: EDIT_TASK_VIEW,
    tasks,
  };
};

export const editTaskInput = (id, input) => {
  const { tasks } = store.getState();
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].title = input;

  return {
    type: EDIT_TASK_INPUT,
    tasks,
  };
};

export const addTask = (input) => {
  const { tasks } = store.getState();
  const id = tasks.length ? tasks.reduce((prev, cur) => (cur.id >= prev.id ? cur : prev),
    { id: -Infinity }).id + 1 : 0;

  tasks.push({
    id,
    title: input,
    done: false,
    editing: false,
  });
  console.log(tasks);
  return {
    type: ADD_TAB,
    tasks,
  };
};

export const deleteTask = (id) => {
  const { tasks } = store.getState();
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);

  return {
    type: DELETE_TASK,
    tasks,
  };
};

export const doneTask = (id) => {
  const { tasks } = store.getState();
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].done = !tasks[index].done;
  tasks.sort((a) => (a.done ? 1 : -1));

  return {
    type: DONE_TASK,
    tasks,
  };
};
