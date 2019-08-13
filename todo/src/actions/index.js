export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';

// Our action creators will return an action packet from reducer

export function addTodo(value) {
	// This should add a new ToDo Task
	return {
		type: ADDTODO,
		payload: { value }
	};
}

export function toggleTodo(id) {
	// This should toggle the completed value between true/false
	return {
		type: TOGGLETODO,
		payload: { id }
	};
}