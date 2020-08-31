import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';
import Task from '../components/Task.jsx';
import TaskInput from '../components/TaskInput.jsx';

const Todo = ({ tasks }) => (
  <div className={styles.app}>
    <h1 className={styles.top}>
      {tasks.length}
      {' '}
      TaSkS ToDo
      {' '}
      {new Date().toLocaleDateString()}
    </h1>
    {[
      ...tasks,
    ].map((task) => (
      <Task
        {...task}
        key={task.id}
      />
    ))}
    <TaskInput />
  </div>
);

const mapStateToProps = (state) => ({
  tasks: state.tasks.sort((a) => (a.isDone ? 1 : -1)),
});

Todo.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isDone: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

Todo.defaultProps = {
  tasks: [],
};

export default connect(mapStateToProps)(Todo);
