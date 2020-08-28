import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';
import Task from './components/Task.jsx';
import TaskInput from './components/TaskInput.jsx';
import { store } from './store/configureStore.jsx';

class Todo extends React.Component {
  constructor() {
    super();
    console.log("ny epta");
    // store.subscribe(() => {
    //   const { tasks } = this.props;
    //   localStorage.setItem('todo', JSON.stringify(tasks));
    // });
  }

  render() {
    const { tasks } = this.props;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <div className="App">
        <h1 className="top">
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
  }
}

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
