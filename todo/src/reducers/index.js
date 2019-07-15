import { ACTION } from '../actions';

const initialState = {
  todos: [
    {
    value: 'Walk the dog.',
    completed: false
  }, {
    value: 'Take out the trash.',
    completed: false
  }, 
]
}

// Our reducer that handles the action(s)
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION:
      // This will be the action taken
      return { 
        ...state,
        stateItem: 1
      }
    default:
      return state;
  }
};
