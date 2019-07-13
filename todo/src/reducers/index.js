import { ACTION } from '../actions';

const initialState = {
  // Setting up the initial To Do List (used data from previous to do list)
  task: '',
  completed: false,
  toDoList: [
    {
        task: 'Organize Garage', 
        id: 1528817077286, 
        completed: false
    }, 
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
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
