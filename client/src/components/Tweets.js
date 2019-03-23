import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import List from './List';

class Tweets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tweets: undefined
		}
	}
	

	        componentDidMount() {
			               this.callBackendAPI()
					.then(res => this.setState({ tweets: res.statuses}))
			                .catch(err => console.log(err));
			        }
	        callBackendAPI = async () => {
			                const response = await fetch('/express_backend')
			                const body = await response.json();
					console.log(body.statuses[0]);
			                if (response.status !== 200) {
						                        throw Error(body.message)
						                }
			                return body;
			        }

	render () {
		if (!this.state.tweets) return <p>Loading...</p>
		return (
			<section id='scrollto' className='sect'>
				<div className='container'>
					<div className='row'>
						<List listItems={this.state.tweets} />	
					</div>
				</div>
			</section>
		)
	}
}

export default Tweets
