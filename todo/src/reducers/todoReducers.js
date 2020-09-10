import {
  ADD_TAB, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DELETE_TASK, DONE_TASK,
} from '../const';

const todoReducer = (oldState = [], { type, payload }) => {
  switch (type) {
    case EDIT_TASK_VIEW:
      return payload;
    case EDIT_TASK_INPUT:
      return payload;
    case ADD_TAB:
      return payload;
    case DONE_TASK:
      return payload;
    case DELETE_TASK:
      return payload;
    default:
      return oldState;
  }
};

export default todoReducer;
