import React from "react";
import { connect } from 'react-redux'
// import Todo from "./Todo";

// <TodoList /> receives Todos array and
// iterates over the list generating a new <Todo />
// for each element in the array.

// initialState: toDoList[]

function TodoList(props) {
  // get variables from state
  const toDoList = props.toDoList;
  console.log(props.toDoList);

  return (
    <div>
      <ul>
        {props.toDoList.map(toDo => {
          return (
            <li>{toDo.task}</li>
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

export default connect(mapStateToProps)(TodoList);

// <Todo toDo={toDo} key={toDo.id} toggleTodo={props.toggleTodo} />