import { TOGGLETODO, ADDTODO } from '../actions';

const initialState = {
	todos: [
		{
			id: 1,
			value: 'Walk the dog.',
			completed: false
		},
		{
			id: 2,
			value: 'Take out the trash.',
			completed: false
		}
	]
};

// Our reducer that handles the action(s)
export default (state = initialState, action) => {
	switch (action.type) {
		case ADDTODO:
			// Add a new Todo
			const newToDO = {
				id: Date.now(),
				value: action.payload.value,
				completed: false
			}
			return {
				...state,
				todos: [...state.todos, newToDO]
			};
		case TOGGLETODO:
			// Toggle the completed status

			// map over current state and mark task completed if = id passed in
			const toggleToDoList = state.todos.map(todo =>
				(todo.id === parseInt(action.payload.id))
					? { ...todo, completed: !todo.completed }
					: todo
			);

			return {
				...state,
				todos: toggleToDoList
			};
		default:
			return state;
	}
};
