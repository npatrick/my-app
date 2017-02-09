import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';
import Portfolio from './components/portfolio.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="w3-sidenav w3-center w3-small w3-hide-small">
          <a className="w3-padding-large w3-black" href="#">
            <i className="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
          </a>
          <a className="w3-padding-large w3-hover-black" href="#portfolio">
            <i className="fa fa-user w3-xxlarge"></i>
            <p>PORTFOLIO</p>
          </a>
          <a className="w3-padding-large w3-hover-black" href="#blog">
            <i className="fa fa-eye w3-xxlarge"></i>
            <p>BLOG</p>
          </a>
          <a className="w3-padding-large w3-hover-black" href="#contact">
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </a>
        </nav>

        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <ul className="w3-navbar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <li className="w3-left" style={{width:"25% !important"}}><a href="#">HOME</a></li>
            <li className="w3-left" style={{width:"25% !important"}}><a href="#portfolio">PORTFOLIO</a></li>
            <li className="w3-left" style={{width:"25% !important"}}><a href="#blog">BLOG</a></li>
            <li className="w3-left" style={{width:"25% !important"}}><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
        <Home />
        <Portfolio />
        <Contact />
        <Footer />

      </div>
    );
  }
}

export default App;
