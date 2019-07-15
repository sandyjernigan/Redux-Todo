import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/';
import Todo from './Todo';

// <TodoList /> receives Todos array and
// iterates over the list generating a new <Todo />
// for each element in the array.

// initialState: todos[]

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos
		};
	}

	toggleTodo = (toDo) => {
		this.props.toggleTodo(toDo.id);
	};

	render() {
		return (
			<div>
				<ul>
					{this.state.todos.map((toDo) => {
						return <Todo toDo={toDo} key={toDo.id} toggleTodo={this.props.toggleTodo} />;
					})}
				</ul>
			</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
