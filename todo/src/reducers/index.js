import { TOGGLETODO } from '../actions';

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
		case TOGGLETODO:
			// Toggle the completed status
			console.log('Reducer: Toggle To Do.' + action.payload.id);
			console.log(state.todos);

			// map over current state and mark task completed if = id passed in
			// const ToggleToDoList = state.todos.map((todo) => {
			// 	// if (todo.id === action.payload.id) {
			// 	// 	const newTodo = {
			// 	// 		...todo,
			// 	// 		completed: !todo.completed
			// 	// 	};
			// 	// 	return newTodo;
			// 	// } else {
			// 	// 	return todo;
			// 	// }
			// });
			return state;
		default:
			return state;
	}
};
