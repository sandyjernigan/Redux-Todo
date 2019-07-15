import React from "react";
import { connect } from "react-redux";
import { action } from "../actions";

// <TodoList /> receives Todos array and
// iterates over the list generating a new <Todo />
// for each element in the array.

// initialState: todos[]

function TodoList(props) {
  // get variables from state
  const todos = props.todos;

  const clickHandler = () => {};

  return (
    <div>
      <ul>
        {todos.map(toDo => {
          return (
            <li
              className={`task ${toDo.completed ? " completed" : ""}`}
              onClick={clickHandler}
              key={toDo.id}
            >
              {toDo.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// The mapStateToProps function specifies which portion of the state tree this component needs to receive.

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

// The mapDispatchToProps is used to dispatch the actions
const mapDispatchToProps = {
  toggleTodo: toggleTodo
};

// The connect function makes this component aware of the rest of the redux architecture.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
