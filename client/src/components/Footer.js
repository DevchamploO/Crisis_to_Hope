import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/footer.css';

class Footer extends Component {
	render () {
		return (
			<div className='sect footer'>
			<h3>If you or someone you know is struggling with suicide please call the <br/><span id='lifeline'>National Suicide Prevention Lifeline at 1-800-273-8255</span></h3>
			</div>
		)
	}
}

export default Footer
