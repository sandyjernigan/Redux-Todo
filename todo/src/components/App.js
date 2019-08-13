import React, { Component } from 'react';
import { TodoList, TodoForm } from './Todo';
import Background from './backgroundStyle/bg';

class App extends Component {
	render() {
		return (
			<div>
				<Background />
				<div className="main">
					<h2>Honey Do List!</h2>
					<div className="todolist">
						<TodoList />
						<TodoForm />
					</div>
				</div>
			</div>
		);
	}
}

export default App;

// <TodoForm />
