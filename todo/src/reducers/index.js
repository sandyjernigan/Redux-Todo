import { TOGGLETODO } from '../actions';

const initialState = {
	todos: [
		{
			id: 1,
			value: 'Walk the dog.',
			completed: true
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

			// map over current state and mark task completed if = id passed in
			const toggleToDoList = state.todos.map(todo =>
				(todo.id == action.payload.id)
					? { ...todo, completed: !todo.completed }
					: todo
			);
			console.log('toggleToDoList:');
			console.log(toggleToDoList);

			return {
				...state,
				todos: toggleToDoList
			};
		default:
			return state;
	}
};
