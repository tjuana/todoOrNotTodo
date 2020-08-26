import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles.css';
import Task from './components/Task';
import TaskInput from './components/TaskInput.jsx';
import {
  doneTask, deleteTask, addTask, editTaskView, editTaskInput, toggleTodo,
} from './redux/todoActions';
import { store } from './store/configureStore';

class Todo extends React.Component {
  constructor() {
    super();
    store.subscribe(() => {
      localStorage.setItem('todo', JSON.stringify(this.props.tasksRedux.tasks));
    });
  }

  render() {
    const { props } = this;
    const {
      tasksRedux, done, del, editView, editInput, add,
    } = props;
    const { tasks } = tasksRedux;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);

    return (
      <div className="App">
        <h1 className="top">
          {activeTasks.length}
          {' '}
          tasks ToDo
          {' '}
          {new Date().toLocaleDateString()}
        </h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => done(tasks.indexOf(task))}
            deleteTask={() => del(tasks.indexOf(task))}
            editTaskView={() => editView(tasks.indexOf(task))}
            editTaskInput={editInput}
            task={task}
            key={task.id}
            edit={task.editing}
          />
        ))}
        <TaskInput addTask={add} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasksRedux: state,
});

const mapDispatchToProps = (dispatch) => ({
  del: (index) => dispatch(deleteTask(index)),
  done: (index) => dispatch(doneTask(index)),
  add: (input) => dispatch(addTask(input)),
  editView: (index) => dispatch(editTaskView(index)),
  editInput: (index, input) => dispatch(editTaskInput(index, input)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

Todo.propTypes = {
  tasksRedux: PropTypes.arrayOf(
    PropTypes.shape({
      filter: PropTypes.func.isRequired,
      indexOf: PropTypes.func.isRequired,
      id: PropTypes.number.isRequired,
      done: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  done: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  editView: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  tasksRedux: [],
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
