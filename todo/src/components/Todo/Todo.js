import React from 'react';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

function Todo(props) {
	const clickHandler = () => {
		props.toggleTodo(props.toDo.id);
	};

	return (
		<li className={`task ${props.toDo.completed ? ' completed' : ''}`} onClick={clickHandler}>
			{props.toDo.value}
		</li>
	);
}
export default Todo;
