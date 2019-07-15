import React from "react";
import { connect } from 'react-redux';
import { addTodo } from '../../actions/';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  changeHandler = event => {
    this.setState({ value: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    this.setState({ value: '' });
  };

  // If task is empty, preventDefault and do nothing
  noChange = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.state.task !== '' ? this.submitHandler : this.noChange}>
          <input
            type="text"
            placeholder="...todo"
            name="task"
            onChange={this.changeHandler}
          />
          <button type="submit">Add Todo</button>
        </form>
        <br />

        {/* <button onClick={this.clearTodo}>Clear Completed</button>
        <button onClick={this.resetTodo}>Reset</button> */}
      </div>
    );
  }
}

// State
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

// dispatch actions
const mapDispatchToProps = {
  addTodo: addTodo
};

// Connect
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);