import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";


class App extends React.Component {
  constructor() {
	super();

	///real part
	

	console.log(localStorage.getItem('todo'));
    this.state = {
      tasks: [
	  ]
	};
	this.state.tasks = JSON.parse(localStorage.getItem('todo'));
  }
 
  toLocal = (tasks) => {
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
  };

  addTask = (task) => {
    const { tasks } = this.state;
    const newTasks = tasks;
    newTasks.push({
      id: newTasks.length !== 0 ? newTasks.length : 0,
      title: task,
      done: false,
      editing: false
    });
	this.setState((tasks) => newTasks);
	this.toLocal(newTasks);
  };

  doneTask = (id) => {
    const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = this.state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
	const index = this.state.tasks.map((task) => task.id).indexOf(id);
    this.setState((state) => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  editTaskInput = (id, input) => {
	const {tasks} = this.state;
	const newTasks = tasks;
	const index = this.state.tasks.map((task) => task.id).indexOf(id);

	newTasks[index].title = input;
	this.setState((tasks) => newTasks);
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
        <TaskInput addTask={this.addTask}></TaskInput>
		<img src={logo}></img>
      </div>

    );
  }
}

export default App;
