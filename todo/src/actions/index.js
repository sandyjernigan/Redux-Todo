export const TOGGLETODO = 'TOGGLETODO';

// Our action creators will return an action packet from reducer

export function toggleTodo(id) {
	// This should toggle the completed value between true/false
	return {
		type: TOGGLETODO,
		payload: { id }
	};
}
