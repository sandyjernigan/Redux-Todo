export const ACTION = 'ACTION';
export const TOGGLETODO = 'TOGGLETODO';

// Our action creators will return an action packet from reducer

export const action = (variable) => {
  // Function should increment number by 1
  return {
    type: ACTION,
    payload: { variable }
  }
};

export function makeDeposit(id) {
  // Function should increment number by 1
  return {
    type: TOGGLETODO,
    payload: { id }
  }
};
