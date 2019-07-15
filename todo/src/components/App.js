import React, { Component } from "react"
import { connect } from 'react-redux'
import { action } from '../actions'
import { TodoList, TodoForm } from './Todo'
import Background from './backgroundStyle/bg';
import './Todo/Todo.css';

class App extends Component {
    render() {
      return (
        <div>
          <Background />
          <div className="main">
            <h2>Honey Do List!</h2>
            <div className="todolist">
            <TodoList />
            {/* <TodoForm /> */}
            </div>
          </div>
        </div>
        );
    }
}

export default App