export const TOGGLETODO = 'TOGGLETODO';

// Our action creators will return an action packet from reducer

export function toggleTodo(id) {
  // Function should increment number by 1
  return {
    type: TOGGLETODO,
    payload: { id }
  }
};