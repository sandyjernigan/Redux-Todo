import React from "react";
import { connect } from 'react-redux'

// <TodoList /> receives Todos array and
// iterates over the list generating a new <Todo />
// for each element in the array.

// initialState: toDoList[]

function TodoList(props) {
  // get variables from state
  const toDoList = props.toDoList;

  const clickHandler = () => {
    // props.toggleTodo(props.toDo.id);
  };

  return (
    <div>
      <ul>
        {toDoList.map(toDo => {
          return (
            <li 
              className={`task ${toDo.completed ? " completed" : ""}`} 
              onClick={clickHandler} key={toDo.id} >
              {toDo.task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    toDoList: state.toDoList
  };
};

// The mapDispatchToProps is used to dispatch the actions
const mapDispatchToProps = { 
    // action: action
}

// The connect function makes this component aware of the rest of the redux architecture. 
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);