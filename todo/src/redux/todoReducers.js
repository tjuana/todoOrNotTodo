

export function todoReducer(oldState, action){
	switch  (action.type) {
		case "EDIT_TASK_VIEW" :
			return {
				...oldState, 
				tasks : [...action.tasks]
			};
		case "EDIT_TASK_INPUT" :
			return {
				...oldState, 
				tasks : [...action.tasks]
			};
		case "ADD_TAB" :
			return {
				...oldState, 
				tasks : [...action.tasks]
				};
		case "DONE_TASK" :
			return {
				...oldState, 
				tasks : [...action.tasks]
				};
		case "DELETE_TASK" :
			return {
				...oldState, 
				tasks : [...action.tasks]	
				};
		default :
				return oldState
	}	
}