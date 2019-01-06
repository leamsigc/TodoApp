import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from './Header';
import '../index.css';


class App extends Component {
	state = {
		todos: [{
			title:'clean the house',
			id:Date.now()
		}],
		text: ''
	};
	handleChange = e => {
		this.setState({
			text: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		if(!this.state.text) return false;
		const newTodo = {
			title: this.state.text,
			id: Date.now()
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
			text: ''
		});
	};
	removeTodo = todoIndex => {
		const filterTodos = [...this.state.todos];
		filterTodos.splice(todoIndex, 1);
		this.setState({ todos: filterTodos });
	};
	render() {
		return (
			<div className="App">
				<Header />
				<TodoForm handleSubmit={this.handleSubmit} change={this.handleChange.bind(this)} text={this.state.text} />{' '}
				<TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
			</div>
		);
	}
}

export default App;
