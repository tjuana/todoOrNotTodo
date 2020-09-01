import {
  ADD_TAB, EDIT_TASK_INPUT, EDIT_TASK_VIEW, DELETE_TASK, DONE_TASK,
} from '../const';

const todoReducer = (oldState = [], { type, payload }) => {
  let newState = null;
  switch (type) {
    case EDIT_TASK_VIEW:
      newState = oldState.map((task) => (
        task.id === payload
          ? { ...task, isEditMode: !task.isEditMode }
          : task));
      return newState;
    case EDIT_TASK_INPUT:
      newState = oldState.map((task) => (
        task.id === payload.id
          ? { ...task, title: payload.inputValue }
          : task));
      return newState;
    case ADD_TAB:
      newState = [
        ...oldState,
        {
          id: payload.id,
          title: payload.inputValue,
          isDone: false,
          isEditMode: false,
        },
      ];
      return newState;
    case DONE_TASK:
      newState = oldState.map((task) => (
        task.id === payload
          ? { ...task, isDone: !task.isDone }
          : task));
      return newState;
    case DELETE_TASK:
      newState = [...oldState].filter((task) => payload !== task.id);
      return newState;
    default:
      return oldState;
  }
};

export default todoReducer;
