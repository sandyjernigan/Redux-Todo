import React from 'react';
import Todo from './Todo';

// <TodoList /> receives Todos array and iterates over the list generating a new <Todo /> for each element in the array.
    
function TodoList(props) {
    return (
        <div>
            <ul>
                <li>To Do List</li>
                {/* {props.todolist.map(toDo => {
                    return (
                    <Todo toDo={toDo} key={toDo.id}
                        toggleTodo={props.toggleTodo}
                    />
                );})} */}
            </ul>
        </div>
    );
}

export default TodoList;