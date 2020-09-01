import {
  ADD_TAB, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DELETE_TASK, DONE_TASK,
} from '../const';

const todoReducer = (oldState = [], action) => {
  let newState = null;
  switch (action.type) {
    case EDIT_TASK_VIEW:
      newState = oldState.map((task) => (
        task.id === action.payload.id
          ? { ...task, editing: !task.editing }
          : task));
      return newState;
    case EDIT_TASK_INPUT:
      newState = oldState.map((task) => (
        task.id === action.payload.id
          ? { ...task, title: action.payload.input }
          : task));
      return newState;
    case ADD_TAB:
      newState = [
        ...oldState,
        {
          id: action.payload.id,
          title: action.payload.input,
          isDone: false,
          editing: false,
        },
      ];
      return newState;
    case DONE_TASK:
      newState = oldState.map((task) => (
        task.id === action.payload.id
          ? { ...task, isDone: !task.isDone }
          : task));
      return newState;
    case DELETE_TASK:
      newState = [...oldState].filter((task) => action.payload.id !== task.id);
      return newState;
    default:
      return oldState;
  }
};

export default todoReducer;
