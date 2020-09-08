import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Task.module.css';
import { editTaskView, editTaskInput } from '../../action/todoActions.jsx';
import ActionBtn from '../ActionBtn/ActionBtn.jsx';

const Task = ({
  isEditMode, id, isDone, title, editView, editInput,
}) => {
  const [inputVal, setInputVal] = useState(title);

  useEffect(() => {
    editInput(id, inputVal);
  }, [inputVal, id, editInput]);

  const handleChange = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  const handleEditView = () => {
    editView(id);
  };

  return (
    <div className={cx(styles.task, { [styles.taskdone]: isDone })}>

      <ul>
        <li onDoubleClick={handleEditView}>
          <p className={cx({ [styles.hidden]: isEditMode })}>{title}</p>
          <form onSubmit={handleEditView}>
            <input
              onChange={handleChange}
              className={cx(styles.input, { [styles.hidden]: !isEditMode })}
              type="text"
              value={inputVal}
            />
          </form>
        </li>
      </ul>
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
