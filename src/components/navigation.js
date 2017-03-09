import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-custom" role="navigation">

          <div class="container">

            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#custom-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">Neil Romana</a>
            </div>

            <div class="collapse navbar-collapse" id="custom-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    UI Elements <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li><a href="icons.html">Icons</a></li>
                    <li><a href="components.html">Components</a></li>
                  </ul>
                </li>
              </ul>
            </div>

          </div>

        </nav>
      </header>
    )
  }
};
