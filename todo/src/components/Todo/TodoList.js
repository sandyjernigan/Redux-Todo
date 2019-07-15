import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../../actions/';
// import Todo from './Todo';

// <TodoList /> receives Todos array and
// iterates over the list generating a new <Todo />
// for each element in the array.

// initialState: todos[]

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: props.todos,
			value: ''
		};
	}

	toggleTodo = (event) => {
		const toggleID = event.target.getAttribute('name');
		this.props.toggleTodo(toggleID);
		this.setState({ value: '' });
	};

	render() {
		console.log('state:');
		console.log(this.props.todos);
		const todoslist = this.props.todos;

		return (
			<div>
				<ul>
					{todoslist.map((toDo) => {
						return (
							<li
								name={toDo.id}
								key={toDo.id}
								className={`task ${toDo.completed ? ' completed' : ''}`}
								onClick={this.toggleTodo}
							>
								{toDo.value}
							</li>
						);
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
