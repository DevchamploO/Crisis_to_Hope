import React, { Component } from 'react';

import '../stylesheets/header.css';

class Header extends Component {
	render() {
		return (
			<header className='container-fluid'>
				<div id='title'>
					<h1> Fight Suicide<br/>Find those at risk</h1>
					<a href='#scrollto'>Get Started</a>
				</div>
			</header>
		)
	}
}

export default Header
