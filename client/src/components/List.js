import React, { Component } from 'react';

import '../stylesheets/list.css'

class List extends Component {
	render () {
		if(this.props.listItems === undefined || this.props.listItems.length === 0) {return <h1>No tweets detected</h1>}
	let elements = this.props.listItems.map((element) => {
		return (<li className='listItem'>
				<p className='name'>{element.user.name}</p>
				<p className='screen_name'>{element.user.screen_name}</p>
				<p className='message'>{element.text}</p>
			</li>);
	});
		return <ul>{elements}</ul>
	}	
}

export default List;