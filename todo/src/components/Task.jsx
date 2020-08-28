import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  doneTask, deleteTask, editTaskView, editTaskInput,
} from '../redux/todoActions.jsx';

const Task = ({
  editing, id, done, title, del, doneTaskView, editView, editInput,
}) => {
  const handleClick = () => {
    if (done) {
      del(id);
    } else {
      doneTaskView(id);
    }
  };

  const ActionBtn = () => (
    <button className="action-btn" onClick={handleClick} type="submit">
      {!done ? (
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

  const taskDone = classNames({
    task: true,
    'task-done': done,
  });
  let inputValue = title;
  const viewStyle = {};
  const editStyle = {};

  if (editing) {
    viewStyle.display = 'none';
  } else {
    editStyle.display = 'none';
  }

  const editInputChange = (event) => {
    inputValue = event.target.value;
    editInput(id, inputValue);
  };

  const handleEditView = () => {
    editView(id);
  };
  return (
    <div className={taskDone} onDoubleClick={handleEditView} data-id="id">
      <p style={viewStyle}>{title}</p>
      <input
        onChange={editInputChange}
        style={editStyle}
        className="task-input"
        type="text"
        value={inputValue}
      />
      <ActionBtn />
    </div>
  );
};

Task.propTypes = {
  doneTaskView: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  editView: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  del: (id) => dispatch(deleteTask(id)),
  doneTaskView: (id) => dispatch(doneTask(id)),
  editView: (index) => dispatch(editTaskView(index)),
  editInput: (index, input) => dispatch(editTaskInput(index, input)),
});
export default connect(null, mapDispatchToProps)(Task);
