import React, { Component } from "react"
import { connect } from 'react-redux'
import { action } from '../actions'
import { TodoList, TodoForm } from './Todo'
import Background from './backgroundStyle/bg';
import './Todo/Todo.css';

class App extends Component {    

  // Functions

    addTodo = newtask => {
      console.log('Add To Do.');
      // const newToDo = {
      //   task: newtask, 
      //   id: Date.now(), 
      //   completed: false
      // }

      // this.setState({
      //   todoOnState: [...this.state.todoOnState, newToDo] });
    }

    toggleTodo = id => {
      console.log('Toggle To Do.');
      const newToDoList = this.state.todoOnState.map(task => {
        if (task.id === id) {
          const newTask = {
            ...task,
            completed: !task.completed
          };
          return newTask;
        } else {
          return task;
        }});

        this.setState({ todoOnState: newToDoList });
    }

    clearTodo = () => {
      console.log('Clicked Clear.');
      // const newToDoList = this.state.todoOnState.filter(task => task.completed === false);
      // this.setState({ todoOnState: newToDoList });
    }

    resetTodo = () => {
      console.log('Clicked Reset.');
      // this.setState({ todoOnState: toDoList });
    }

    render() {
      // use this.props.stateItem
      return (
        <div>
        <Background />
          <div className="main">
            <h2>Honey Do List!</h2>
            <div className="todolist">
            <TodoList toggleTodo={this.toggleTodo} />
            <TodoForm />
            
            <br />
            
            <button onClick={this.clearTodo}>Clear Completed</button>
            <button onClick={this.resetTodo}>Reset</button>
      
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
