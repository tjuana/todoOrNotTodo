import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './TaskInput.module.css';
import { addTask, editTaskView } from '../../action/todoActions.jsx';

const TaskInput = ({ add, tasks }) => {
  const [inputVal, setInputVal] = useState('');

  const addTaskInput = () => {
    const id = tasks.length
      ? tasks.reduce((prev, cur) => (cur.id >= prev.id ? cur : prev),
        { id: -Infinity }).id + 1 : 0;
    if (inputVal) {
      add(inputVal, id);
      setInputVal('');
    }
  };

  const inputChange = (event) => {
    // event.preventDefault();
    setInputVal(event.target.value);
  };

  return (
    <form onSubmit={addTaskInput}>
      <div className={styles.taskBlock}>
        <input onChange={inputChange} value={inputVal} />
        <button onClick={addTaskInput} type="button">ADD...</button>
      </div>
      {' '}
    </form>
  );
};

TaskInput.propTypes = {
  add: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isDone: PropTypes.bool.isRequired,
      isEditMode: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

const mapDispatchToProps = {
  add: addTask,
  editView: editTaskView,
};

TaskInput.defaultProps = {
  tasks: [],
};

export default connect((state) => ({
  tasks: state.tasks,
}), mapDispatchToProps)(TaskInput);

export { TaskInput as TaskInputl };
