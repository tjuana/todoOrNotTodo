import {
  ADD_TAB, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DELETE_TASK, DONE_TASK, INIT,
} from '../const';

const todoReducer = (oldState, action) => {
  switch (action.type) {
    case EDIT_TASK_VIEW:
      return {
        ...oldState,
        tasks: [...action.tasks],
      };
    case EDIT_TASK_INPUT:
      return {
        ...oldState,
        tasks: [...action.tasks],
      };
    case ADD_TAB:
      return {
        ...oldState,
        tasks: [...action.tasks],
      };
    case DONE_TASK:
      return {
        ...oldState,
        tasks: [...action.tasks],
      };
    case DELETE_TASK:
      return {
        ...oldState,
        tasks: [...action.tasks],
      };
    case INIT:
      return {
        ...oldState,
        tasks: [...action.tasks],
      };
    default:
      return oldState;
  }
};

export default todoReducer;
