import React, { Component } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import About from './components/About';
import Footer from './components/Footer';
import logo from './logo.svg';
import './stylesheets/app.css';

class App extends Component {
	/*state = {
		data: null
	};

	componentDidMount() {
  		this.callBackendAPI()
		.then(res => this.setState({ data: res.express }))
		.catch(err => console.log(err));
	}
	callBackendAPI = async () => {
		const response = await fetch('/express_backend')
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	};*/
  render() {
    return (
	<div>
	    <Header />
	    <About />
	    <Tweets />
	    <Footer />
	</div>
    );
  }
}

export default App;
