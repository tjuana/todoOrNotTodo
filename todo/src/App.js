import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import {todoReducer} from './redux/todoReducers';
import {changeFilterAction, addTaskAction, putTasksToArray, addTask} from './redux/todoActions';
import {createStore, combineReducers} from 'redux';

class App extends React.Component {
  constructor() {
	super();

    this.state = {
      tasks: []
	};

	this.store = createStore(todoReducer);
	this.store.dispatch(putTasksToArray(JSON.parse(localStorage.getItem('todo'))));
	this.state = this.store.getState();

	this.store.subscribe( () => {
		this.setState(this.store.getState());
	})
	console.log(this.store.getState());

	
  }
 
  saveToLocal = () => {
	localStorage.setItem('todo', JSON.stringify(this.state.tasks));
	};

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

//   addTask = (task) => {
//     const { tasks } = this.state;
// 	const newTasks = tasks;
// 	// var test = this.store.dispatch(addTaskAction(newTasks, task));
// 	// console.log(test);
//     // newTasks.push({
//     //   id: newTasks.length !== 0 ? newTasks.length : 0,
//     //   title: task,
//     //   done: false,
//     //   editing: false
//     // });
// 	// this.setState((tasks) => newTasks);
// 	this.store.dispatch(addTaskAction(task));
// 	// this.setState((tasks) => newTasks);
// 	//this.saveToLocal();
//   };

  doneTask = (id) => {
	const index = this.state.tasks.map((task) => task.id).indexOf(id);
	const { tasks } = this.state;
	const newTasks = tasks;
	newTasks[index].done = true;
    this.setState((tasks) => newTasks);
	this.saveToLocal();
  };

  deleteTask = (id) => {
	const index = this.state.tasks.map((task) => task.id).indexOf(id);
	const { tasks } = this.state;
	const newTasks = tasks;
	newTasks.splice(index, 1);
	this.setState((tasks) => newTasks);
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
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">{activeTasks.length} tasks ToDo {new Date().toLocaleDateString()}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
			editTaskView={() => this.editTaskView(task.id)}
			editTaskInput={this.editTaskInput}
            task={task}
            key={task.id}
            edit={task.editing}
          ></Task>
        ))}
        <TaskInput store={this.store}></TaskInput>
		<img src={logo} alt="reactlogo"></img>
      </div>

    );
  }
}

export default App;
