import React from 'react';
import logo from './logo.svg';
import "./styles.css";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import { doneTask, deleteTask, addTask , editTaskView, editTaskInput, toggleTodo} from "./redux/todoActions";
import { connect } from 'react-redux'
import { store } from './store/configureStore';

class App extends React.Component {
  constructor() {
	super();
	store.subscribe( () => {
		localStorage.setItem('todo', JSON.stringify(this.props.tasksFromRedux.tasks));
	})
  }

  render() {
	const  props  = this.props
	const { tasks } = props.tasksFromRedux;
    const activeTasks = tasks.filter((task) => !task.done);
	const doneTasks = tasks.filter((task) => task.done);
	
    return (
      <div className="App">
        <h1 className="top">{activeTasks.length} tasks ToDo {new Date().toLocaleDateString()}</h1>
        {[...activeTasks, ...doneTasks].map((task) => (
          <Task
			// doneTask={() => props.doneTask(tasks.indexOf(task))}
			doneTask={() => props.toggleTodo(task.id)}
			deleteTask={() => props.deleteTask(tasks.indexOf(task))}
			editTaskView={() => props.editTaskView(tasks.indexOf(task))}
			editTaskInput={props.editTaskInput}
            task={task}
            key={task.id}
            edit={task.editing}
          ></Task>
        ))}
        <TaskInput addTask={props.addTask}></TaskInput>
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
		deleteTask : (index) => dispatch(deleteTask(index)),
		doneTask : (index) => dispatch(doneTask(index)),
		addTask : (input) => dispatch(addTask(input)),
		editTaskView : (index) => dispatch(editTaskView(index)),
		editTaskInput : (index, input) => dispatch(editTaskInput(index, input)),
		toggleTodo : (id) => dispatch(toggleTodo(id))
	}
}

 
export default connect(mapStateToProps, mapDispatchToProps)(App);
