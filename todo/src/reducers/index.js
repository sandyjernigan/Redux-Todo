import { TOGGLETODO } from '../actions';

const initialState = {
  todos: [
    {
      id: 1,
      value: 'Walk the dog.',
      completed: false
    }, {
      id: 2,
      value: 'Take out the trash.',
      completed: false
    }, 
  ]
}

// Our reducer that handles the action(s)
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLETODO:
      // Toggle the completed status
      return { 
        ...state,
        stateItem: 1
      }
    default:
      return state;
  }
};
