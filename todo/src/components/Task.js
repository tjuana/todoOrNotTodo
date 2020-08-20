import React from "react";
import App from "../App";

class Task extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		input : ""
	// 	};
	// }



	inputChange = (event) => {
		this.setState({ input: event.target.value });
	};
	
	render (){
	
	var viewStyle = {};
	var editStyle = {};
	const {deleteTask, doneTask, task, editTask, edit, editTaskInput} = this.props;
	const className = "task " + (task.done ? "task-done" : "");
	const { input } = task.title;
	const ActionBtn = () => (
    <div className="action-btn">
      {task.done ? (
        <span aria-label="done" role="img" onClick={deleteTask}>
          ✅
        </span>
      ) : (
        <span aria-label="delete" role="img" onClick={doneTask}>
          🎯
        </span>
      )}
    </div>
  );

  if (edit) {
    viewStyle.display = "none";
  } else {
    editStyle.display = "none";
  }

  return (
    <div className={className} onDoubleClick={editTask}>
      <p style={viewStyle} >{task.title}</p>
      <input
	  	onChange={editTaskInput}
        style={editStyle}
        className="task-input"
		type="text"
		value={task.title}
      ></input>
      <ActionBtn></ActionBtn>
    </div>
  );
}
}

export default Task;
