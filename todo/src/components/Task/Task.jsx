import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { editTaskView, editTaskInput } from '../../action/todoActions.jsx';
import ActionBtn from '../ActionBtn/ActionBtn.jsx';

const Task = ({
  isEditMode, id, isDone, title, editView, editInput,
}) => {
  const [inputVal, setInputVal] = useState(title);

  useEffect(() => {
    editInput(id, inputVal);
  }, [inputVal]);

  const handleChange = (event) => {
    setInputVal(event.target.value);
    // event.preventDefault();
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
      <ActionBtn
        isDone={isDone}
        id={id}
      />
    </div>
  );
};

Task.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  editView: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  editView: editTaskView,
  editInput: editTaskInput,
};

export default connect(null, mapDispatchToProps)(Task);

export { Task as TaskList };
