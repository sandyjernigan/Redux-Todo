import React from 'react';

// Component for the ToDoList Form
// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons. 

class TodoForm extends React.Component {
    
    changeHandler = event => {
        //this.setState({ task: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        console.log('Submit Handler.');
        // this.props.addTodo(this.state.task);
        // this.setState({ task: '' });
    };

    // If task is empty, preventDefault and do nothing
    noChange = event => {
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="...todo" 
                    name="task" 
                    value='value'
                    onChange={this.changeHandler} 
                /> 
                <button type="submit">Add Todo</button> 
            </form>
        );
    }
}

export default TodoForm;


// <form onSubmit={this.state.task !== '' ? this.submitHandler : this.noChange}>
// <input type="text" placeholder="...todo" 
//     name="task" 
//     value={this.state.task}
//     onChange={this.changeHandler} 
// /> 
// <button type="submit">Add Todo</button> 
// </form>