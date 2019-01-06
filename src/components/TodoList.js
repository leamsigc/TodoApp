import React, { Component } from 'react';

export default class TodoList extends Component {
	render() {
		let { todos,removeTodo} = this.props;
		return (
			<div>
				<ul style={listStyle}>
					{todos.map((item, index) => (
						<li style={listItemStyle} key={item.id}>
							{item.title} 
							<button style={deletestyle} onClick={removeTodo.bind(this,index)}> X </button>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const listStyle = {
	marginTop: '2rem',
	padding: '2rem 3rem',
	listStyle: 'none'
}
const listItemStyle={
	background: '#f4f4f4',
	color: '#333',
	padding: '1rem 2rem',
	textTransform: 'uppercase',
	display: 'flex',
	justifyContent: 'space-between'
}
const deletestyle = {
	background: 'red',
	padding: '0.5rem',
	color: '#f3f3f3',
	border: 'none',
	borderRadius: '50%'
}