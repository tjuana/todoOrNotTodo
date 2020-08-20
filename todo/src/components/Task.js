import React from "react";
import TaskInput from "./TaskInput";

const Task = ({ edit, task, ...props }) => {
  const ActionBtn = () => (
    <div className="action-btn">
      {task.done ? (
        <span aria-label="done" role="img" onClick={props.deleteTask}>
          ✅
        </span>
      ) : (
        <span aria-label="delete" role="img" onClick={props.doneTask}>
          🎯
        </span>
      )}
    </div>
  );

  const className = "task " + (task.done ? "task-done" : "");
  var viewStyle = {};
  var editStyle = {};

  if (edit) {
    viewStyle.display = "none";
  } else {
    editStyle.display = "none";
  }

  function taskChanges(text){
	  var newTask = text

	}
  return (
    <div className={className} onDoubleClick={props.editTask}>
      <p style={viewStyle} >{task.title}</p>
      <input
	  	onChange={TaskInput.inputCahnge}
        style={editStyle}
        className="task-input"
        type="text"
        value={TaskInput.input}
      ></input>
      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Task;
