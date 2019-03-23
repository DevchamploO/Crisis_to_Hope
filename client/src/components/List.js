import React, {Component} from 'react';
import ReactDom from 'react-dom';
import '../stylesheets/list.css'

class List extends Component {
	render () {
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

export default List
