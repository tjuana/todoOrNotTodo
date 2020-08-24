export const changeFilterAction = {
	type: "CHANGE_FILTER"
};

export const addTaskAction = (input) => {
	
	const newTasks = JSON.parse(localStorage.getItem('todo'));

    newTasks.push({
      id: newTasks.length !== 0 ? newTasks.length : 0,
      title: input,
      done: false,
      editing: false
	});

	localStorage.setItem('todo', JSON.stringify(newTasks));
	// console.log(localStorage);
	return {
		type : "ADD_TAB",
		tasks : newTasks
	}
  };

export const putTasksToArray = (tasks) => {
	return {
		type: "PUT_TASKS",
		tasks: tasks
	}
}