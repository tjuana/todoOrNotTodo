import { store } from '../store/configureStore';

export const type = {
  EDIT_TASK_VIEW: "EDIT_TASK_VIEW",
  EDIT_TASK_INPUT: "EDIT_TASK_INPUT",
  ADD_TAB: "ADD_TAB",
  DONE_TASK: "DONE_TASK",
  DELETE_TASK: "DELETE_TASK",
  TOGGLE_TODO: "TOGGLE_TODO"
};

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export const editTaskView = (index) => {

  const tasks = store.getState().tasks;
  tasks[index].editing = (tasks[index].editing === false) ? true : false;

  return {
    type: type.EDIT_TASK_INPUT,
    tasks : tasks
  }
}

export const editTaskInput = (index, input) => {

  console.log("task input");
  const tasks = store.getState().tasks;
  tasks[index].title = input;

  return {
    type: type.EDIT_TASK_VIEW,
    tasks : tasks
  }
}

export const addTask = (input) => {

  const tasks = store.getState().tasks;

    tasks.push({
      id: store.getState().tasks.length,
      title: input,
      done: false,
      editing: false
  });

  return {
    type : type.ADD_TAB,
    tasks : tasks
  }
  }

export const deleteTask = (index) => {

  const tasks = store.getState().tasks;
  tasks.splice(index, 1);
  // Object.assign
  return {
    type: type.DELETE_TASK,
    tasks : tasks
  }
}

export const doneTask = (index) => {

  const tasks = store.getState().tasks;
  store.getState().tasks[index].done = true;

  return {
    type: type.DONE_TASK,
    tasks: tasks
  }
}