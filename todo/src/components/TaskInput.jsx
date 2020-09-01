import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './TaskInput.module.css';
import { addTask } from '../action/todoActions.jsx';

const TaskInput = ({ add }) => {
  const [inputVal, setInputVal] = useState('');

  const addTaskInput = () => {
    if (inputVal) {
      add(inputVal);
      setInputVal('');
    }
  };

  const inputChange = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  return (
    <div className={styles.taskInput}>
      <input onChange={inputChange} value={inputVal} />
      <button onClick={addTaskInput} type="submit">ADD...</button>
    </div>
  );
};

TaskInput.propTypes = {
  add: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  add: addTask,
};

export default connect(null, mapDispatchToProps)(TaskInput);
