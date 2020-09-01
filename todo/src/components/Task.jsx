import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import {
  doneTask, deleteTask, editTaskView, editTaskInput,
} from '../action/todoActions.jsx';

const Task = ({
  isEditMode, id, isDone, title, del, doneTaskView, editView, editInput,
}) => {
  const handleClick = () => {
    if (isDone) {
      del(id);
    } else {
      doneTaskView(id);
    }
  };

  const ActionBtn = () => (
    <button className={styles.actionbtn} onClick={handleClick} type="submit">
      {!isDone ? (
        <span aria-label="delete" role="img">
          ✅
        </span>
      ) : (
        <span aria-label="done" role="img">
          🎯
        </span>
      )}
    </button>
  );

  const [inputVal, setInputVal] = useState(title);

  useEffect(() => {
    editInput(id, inputVal);
  }, [inputVal]);

  const handleChange = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  const handleEditView = () => {
    editView(id);
  };

  return (
    <div className={!isDone ? styles.task : styles.taskdone} onDoubleClick={handleEditView}>
      <p className={!isEditMode ? 0 : styles.hidden}>{title}</p>
      <input
        onChange={handleChange}
        className={isEditMode ? styles.input : styles.hidden}
        type="text"
        value={inputVal}
      />
      <ActionBtn />
    </div>
  );
};

Task.propTypes = {
  doneTaskView: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  editView: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  del: deleteTask,
  doneTaskView: doneTask,
  editView: editTaskView,
  editInput: editTaskInput,
};

export default connect(null, mapDispatchToProps)(Task);
