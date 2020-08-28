import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';
import Task from '../components/Task.jsx';
import TaskInput from '../components/TaskInput.jsx';

const Todo = ({ tasks }) => {
  const activeTasks = tasks.filter((task) => !task.done);
  const doneTasks = tasks.filter((task) => task.done);

  return (
    <div className={styles.App}>
      <h1 className={styles.top}>
        {activeTasks.length}
        {' '}
        TaSkS ToDo
        {' '}
        {new Date().toLocaleDateString()}
      </h1>
      {[
        ...activeTasks,
        ...doneTasks,
      ].map((task) => (
        <Task
          {...task}
          key={task.id}
        />
      ))}
      <TaskInput />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

Todo.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

Todo.defaultProps = {
  tasks: [],
};
export default connect(mapStateToProps)(Todo);
