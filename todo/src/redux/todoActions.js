import { store } from '../store/configureStore';

export const type = {
	CHANGE_FILTER : "CHANGE_FILTER",
	ADD_TAB : "ADD_TAB",
	DONE_TASK : "DONE_TASK",
	DELETE_TASK : "DELETE_TASK"
}

export const changeFilterAction = {
	type: type.CHANGE_FILTER
}


export const addTaskAction = (input) => {

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
	return {
		type : type.DELETE_TASK,
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