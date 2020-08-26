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

	var classNames = require('classnames');
 
	const taskDone = classNames({
		task  : true,
		"task-done" : task.done ,
		"" : !task.done
	});
	var input = task.title;
	var viewStyle = {};
	var editStyle = {};

  if (edit) {
    viewStyle.display = "none";
  } else {
    editStyle.display = "none";
  }

  const editInputChange = (event) => {
	input = event.target.value;
	editTaskInput(task.id, input)
};

  return (
    <div className={taskDone} onDoubleClick={editTaskView}>
      <p style={viewStyle} >{task.title}</p>
      <input
		onChange={editInputChange}
        style={editStyle}
        className="task-input"
		type="text"
		value={input}
      ></input>
      <ActionBtn></ActionBtn>
    </div>
  );
}

export default Task;
