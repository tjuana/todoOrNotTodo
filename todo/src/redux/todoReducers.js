

export function todoReducer(oldState, action){
	switch  (action.type) {
		case "CHANGE_FILTER" :
			return {
				...oldState, filter : "complited"
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
			if (!!oldState) 
				return oldState
			else
				return ({tasks : [],filter: "all"});
	}	
}