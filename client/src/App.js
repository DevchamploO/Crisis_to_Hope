import React, { Component } from 'react';
import Header from './components/Header';
import Tweets from './components/Tweets';
import About from './components/About';
import Footer from './components/Footer';
import './stylesheets/app.css';

class App extends Component {
 
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