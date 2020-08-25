import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
// import {createStore, combineReducers} from 'redux';
import { doneTask, deleteTask } from "./redux/todoActions";
import { connect } from 'react-redux'
import { store } from './store/configureStore';

class App extends React.Component {
  constructor() {
	super();
	store.subscribe( () => {
		localStorage.setItem('todo', JSON.stringify(this.props.tasksFromRedux.tasks));
	})
  }
 
  editTaskView = (id) => {
	const index = this.state.tasks.map((task) => task.id).indexOf(id);
	const { tasks } = this.state;
	const newTasks = tasks;
	if (newTasks[index].editing === false) {
		newTasks[index].editing = true;
		
		} else {
			newTasks[index].editing = false;
		}
	this.setState(tasks => newTasks);
	this.saveToLocal();
  };

  editTaskInput = (id, input) => {
	const {tasks} = this.state;
	const newTasks = tasks;
	const index = this.state.tasks.map((task) => task.id).indexOf(id);
	newTasks[index].title = input;
	this.setState((tasks) => newTasks);
	this.saveToLocal();
	};

  render() {
	const { tasks } = this.props.tasksFromRedux;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">{activeTasks.length} tasks ToDo {new Date().toLocaleDateString()}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => store.dispatch(doneTask(tasks.indexOf(task)))}
			deleteTask={() => store.dispatch(deleteTask(tasks.indexOf(task)))}
			editTaskView={() => this.editTaskView(task.id)}
			editTaskInput={this.editTaskInput}
            task={task}
            key={task.id}
            edit={task.editing}
          ></Task>
        ))}
		
        <TaskInput store={store}></TaskInput>
		<img src={logo} alt="reactlogo"></img>
      </div>

    );
  }
}

const mapStateToProps = store => {
	
	return {
	  tasksFromRedux: store,
	}
  }

const mapDispatchToProps = dispatch => {
	return {
		deleteTask : () => dispatch({ type : 'DELETE_TASK' }),
		doneTask : () => dispatch( {type : 'DONE_TASK' }),
		addTask : () => dispatch( {type : 'ADD_TAB' })
	}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
