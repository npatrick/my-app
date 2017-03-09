import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './assets//bootstrap/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/font-awesome.min.css';
import './assets/css/simple-line-icons.css';
import './assets/css/style.css';
// import '../style/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div>{this.props.navigation}</div>
        <div className="main">{this.props.main}</div>
        <div>{this.props.footer}</div>
      </div>
    );
  }
}
