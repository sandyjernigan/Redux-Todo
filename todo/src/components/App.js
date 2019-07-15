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
            {/* <TodoList />
            <TodoForm /> */}
            </div>
          </div>
        </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. 

const mapStateToProps = (state) => {
    return {
        stateItem: state.stateItem
    };
};

// The mapDispatchToProps is used to dispatch the actions
const mapDispatchToProps = { 
    action: action
}

// The connect function makes this component aware of the rest of the redux architecture. 
export default connect(mapStateToProps, mapDispatchToProps)(App);