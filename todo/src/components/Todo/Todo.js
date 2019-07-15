import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/';

// <Todo /> is a component that takes in the todo data and displays the task to the screen.

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos
		};
	}

	clickHandler = () => {
		console.log('Toggle To Do.' + this.props.toDo.id);
		toggleTodo(this.props.toDo.id);
	};

	render() {
		return (
			<li className={`task ${this.props.toDo.completed ? ' completed' : ''}`} onClick={this.clickHandler}>
				{this.props.toDo.value}
			</li>
		);
	}
}

// The mapStateToProps function specifies which portion of the state tree this component needs to receive.

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

// The mapDispatchToProps is used to dispatch the actions
const mapDispatchToProps = {
	toggleTodo: toggleTodo
};

// The connect function makes this component aware of the rest of the redux architecture.
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
