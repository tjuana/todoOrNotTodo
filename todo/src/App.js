import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: "Create todo app", done: false, editing: false },
        { id: 1, title: "Make some noise", done: true, editing: false },
        { id: 2, title: "learn js", done: false, editing: false },
        {
          id: 3,
          title: "read react documentation",
          done: false,
		  editing: false,
        }
      ]
    };
  }

  editTask = (id) => {
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

  editTaskInput = (id) => {
	console.log(id);
	};

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter((task) => !task.done);
    const doneTasks = tasks.filter((task) => task.done);
    return (
      <div className="App">
        <h1 className="top">ToDo : {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
			editTask={() => this.editTask(task.id)}
			editTaskInput={() => this.editTaskInput(task.id)}
            task={task}
            key={task.id}
            edit={task.editing}
          ></Task>
        ))}
        <TaskInput addTask={this.addTask}></TaskInput>
      </div>

    );
  }
}

export default App;
