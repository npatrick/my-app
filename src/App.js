import React, { Component } from 'react';
import '../style/App.css';
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Home />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
