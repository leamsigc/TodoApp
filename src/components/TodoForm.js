import React, { Component } from 'react';

export default class TodoForm extends Component {
	render() {
		return (
			<div className='form-container'>
				<form onSubmit={this.props.handleSubmit}>
					<label htmlFor="new-todo"> Add a new todo for today </label>
					<input type="text" placeholder="add another todo" id="new-todo" onChange={this.props.change} value={this.props.text} />
					<button> Add another todo </button>
				</form>
			</div>
		);
	}
}
