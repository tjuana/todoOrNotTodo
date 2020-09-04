import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  doneTask, deleteTask,
} from '../../action/todoActions.jsx';
import styles from './ActionBtn.module.css';

const ActionBtn = ({
  isDone, del, doneTaskView, id,
}) => {
  const handleClick = () => {
    if (isDone) {
      del(id);
    } else {
      doneTaskView(id);
    }
  };

  return (
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
};

ActionBtn.propTypes = {
  doneTaskView: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = {
  del: deleteTask,
  doneTaskView: doneTask,
};

export default connect(null, mapDispatchToProps)(ActionBtn);
export { ActionBtn as Button };
