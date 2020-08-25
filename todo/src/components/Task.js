import React from "react";
	
	const Task = ({deleteTask, doneTask, task, 
		editTaskView, edit, editTaskInput}) => {
	const ActionBtn = () => (
	<div className="action-btn">
		{task.done ? (
		<span aria-label="delete" role="img" onClick={deleteTask}>
			✅
		</span>
		) : (
		<span aria-label="done" role="img" onClick={doneTask}>
			🎯
		</span>
		)}
	</div>
	);

	const className = "task " + (task.done ? "task-done" : "");
	// console.log("yo hi from task",task.done);
	var input = task.title;
	var viewStyle = {};
	var editStyle = {};

  if (edit) {
    viewStyle.display = "none";
  } else {
    editStyle.display = "none";
  }

  var func = (event) => {
	input = event.target.value;
	 editTaskInput(task.id, input)};

  return (
    <div className={className} onDoubleClick={editTaskView}>
      <p style={viewStyle} >{task.title}</p>
      <input
		onChange={func}
        style={editStyle}
        className="task-input"
		type="text"
		value={input}
      ></input>
      <ActionBtn></ActionBtn>
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		deleteTask : () => dispatch({ type : 'DELETE_TASK' }),
// 		doneTask : () => dispatch( {type : 'DONE_TASK' }),
// 		addTask : () => dispatch( {type : 'ADD_TAB' })
// 	}
// }
export default Task;
