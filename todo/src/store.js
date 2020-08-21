	// ///tests with reducers

	// var todoListState = {
	// 	tasks2: [
	// 		{ id: 0, title: "Create todo app2", done: false, editing: false },
	// 		{ id: 1, title: "Make some noise2", done: true, editing: false },
	// 		{ id: 2, title: "learn js2", done: false, editing: false },
	// 		{
	// 		  id: 3,
	// 		  title: "read react documentation2",
	// 		  done: false,
	// 		  editing: false,
	// 		}
	// 	  ],
	// 	 filter : "all"
	// };

	// const changeFilterAction = {
	// 	type: "CHANGE_FILTER"
	// };

	// const AddTaskAction = {
	// 	type : "ADD_TAB",
	// 	id : 4,
	// 	title : "foo",
	// 	done : false,
	// 	editing: false
	// };

	// //console.log(todoListState);

	// function todoReducer(oldState, action){
	// 	switch  (action.type) {
	// 		case "CHANGE_FILTER" :
	// 			return {
	// 				...oldState, filter : "complited"
	// 			};
	// 		case "ADD_TAB" :
	// 			return {
	// 				...oldState, 
	// 				tasks : [...oldState.tasks, {}]
	// 			};
	// 	}
		
	// }

	// todoListState = todoReducer(todoListState, changeFilterAction);
	

	//console.log(todoListState);