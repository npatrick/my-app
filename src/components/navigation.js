import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="w3-sidenav w3-center w3-small w3-hide-small">
          <a className="w3-padding-large w3-black" href="#">
            <i className="fa fa-home w3-xxlarge"></i>
            <p>HOME</p>
          </a>
          <a className="w3-padding-large w3-hover-black" href="#portfolio">
            <i className="fa fa-user w3-xxlarge"></i>
            <p>PORTFOLIO</p>
          </a>
          <a className="w3-padding-large w3-hover-black" href="#contact">
            <i className="fa fa-envelope w3-xxlarge"></i>
            <p>CONTACT</p>
          </a>
        </nav>

        <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
          <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
            <a className="w3-bar-item w3-button" style={{width:"25% !important"}} href="#">HOME</a>
            <a className="w3-bar-item w3-button" style={{width:"25% !important"}} href="#portfolio">PORTFOLIO</a>
            <a className="w3-bar-item w3-button" style={{width:"25% !important"}} href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    )
  }
};
